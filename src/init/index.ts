import { Utils } from '@semo/core'
import { Container } from 'typedi'

let inited = false

import path from 'path'

export = async () => {
  if (inited) return
  inited = true

  Utils.extendConfig('application.yml', '$app')
  const appConfig = Utils.config('$app') || {}
  appConfig.ROOT_DIR = path.resolve()

  // Load Db
  appConfig.db = appConfig.db || Utils.config('$plugin.sequelize.defaultConnection')
  const { sequelize } = await Utils.invokeHook('semo:component')
  if (Utils._.isString(appConfig.db)) {
    const databaseInstance = await sequelize.db.load(appConfig.db)
    Container.set('databaseInstance', databaseInstance)
  } else {
    throw new Error('Unknow appConfig.db data type!')
  }

  // addGlobalConst('API', api(CFG.serviceName))
  // const redisInstance =  await redis.load(appConfig.redis) //  If Redis server is working, you can comment out this line
  // Container.set('redisInstance', redisInstance)
}

// uncaught error handler
process.on('unhandledRejection', (err, promise) => {
  console.log('unhandledRejection: ', err)
})
process.on('uncaughtException', err => {
  console.log('uncaughtException: ', err)
})
