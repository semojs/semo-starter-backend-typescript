import init from '../../../init'

import path from 'path'
import { Utils } from '@semo/core'
import { redis } from 'semo-plugin-redis'
import { Container } from 'typedi'

/**
 * Implementation of hook_repl
 * 为 REPL 注入初始化环境
 */
export const hook_repl: any = async () => {
  await init()

  // 加载所有的 Service 到 REPL
  const services = {}
  Utils.glob.sync('*Service.js', {
    cwd: path.resolve(__dirname, '../../../service')
  }).map(service => {
    const serviceLoaded = require(path.resolve(__dirname, '../../../service', service))
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

  return { services }

}

/**
 * Implementation of hook_cron_setup
 * 为计划任务进行统一初始化
 */
export const hook_cron_setup: any = async () => {
  // await init()
}

/**
 * Implementation of hook_cron_setup
 * 为计划任务进行统一初始化
 */
export const hook_cron_redis_lock: any = async () => {
  let lock, unlock
  if (redis.defaultConnection) {
    const redisInstance = await redis.load('redis')

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
}
