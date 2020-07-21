import path from 'path'
import { Utils } from '@semo/core'
import { Container } from 'typedi'

import { Application } from '../../../Application';

/**
 * Implementation of hook_repl
 * 为 REPL 注入初始化环境
 */
export const hook_repl: any = new Utils.Hook('semo', async (data, options: any) => {
  const app = new Application()
  await app.init()

  // 加载所有的 Service 到 REPL
  const services = {}
  Utils.glob.sync('*Service.js', {
    cwd: path.resolve(__dirname, '../../../service')
  }).map(service => {
    const servicePath = path.resolve(__dirname, '../../../service', service)

    if (options.reload && require.cache[servicePath]) {
      delete require.cache[servicePath]
    }

    const serviceLoaded = require(servicePath)
    Utils._.each(serviceLoaded, (v, k) => {
      services[k] = Container.get(v)
    })

    if (typeof serviceLoaded === 'function') {
      const key = serviceLoaded.name
      services[key] = Container.get(serviceLoaded)
    } else {
      Utils._.each(serviceLoaded, (v, k) => {
        services[k] = Container.get(v)
      })
    }

  })

  const databaseInstance:any = Container.get('databaseInstance')
  const config = Container.get('config')
  const api = Container.get('api')
  return {
    models: databaseInstance.models,
    services,
    config,
    api,
    database: Container.get('databaseInstance') }

})

/**
 * Implementation of hook_cron_setup
 * 为计划任务进行统一初始化
 */
export const hook_cron_setup: any = new Utils.Hook('semo', async () => {
  // await init()
})

/**
 * Implementation of hook_cron_setup
 * 为计划任务进行统一初始化
 */
export const hook_cron_redis_lock: any = new Utils.Hook('semo', async () => {
  let lock, unlock

  if (Container.has('redisInstance')) {
    const redisInstance: any = Container.get('redisInstance')

    // Redis锁，加锁
    lock = async function(redisKey: string, redisValue: any, timeout: number) {
      Utils.debug('semo-plugin-cron')(`lock redisKey: ${redisKey}, redisValue: ${redisValue}, timeout: ${timeout}`)
      return await redisInstance.eval(
        'return redis.call("set", KEYS[1], ARGV[1], "NX", "PX", ARGV[2])',
        1,
        redisKey,
        redisValue,
        timeout
      )
    }

    // Redis锁，解锁
    unlock = async function(redisKey: string, redisValue: any) {
      Utils.debug('semo-plugin-cron')(`unlock redisKey: ${redisKey}, redisValue: ${redisValue}`)
      return await redisInstance.eval(
        'if redis.call("get", KEYS[1]) == ARGV[1] then return redis.call("del", KEYS[1]) else return 0 end',
        1,
        redisKey,
        redisValue
      )
    }
  }

  return { lock, unlock }
})
