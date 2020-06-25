import { Utils } from '@semo/core'
let inited = false

import path from 'path'

export = async () => {
  if (inited) return
  inited = true

  Utils.extendConfig('application.yml', '$app')
  const appConfig = Utils.config('$app') || {}
  appConfig.db = appConfig.db || Utils.config('$plugin.sequelize.defaultConnection')

  appConfig.ROOT_DIR = path.resolve()

  const { sequelize } = await Utils.invokeHook('component')
  // addGlobalConst('API', api(CFG.serviceName))
  // appConfig.redisInstance =  await redis.load(appConfig.redis) //  If Redis server is working, you can comment out this line

  if (Utils._.isObject(appConfig.db)) {
    const dbInstances = {}
    for (const key of Object.keys(appConfig.db)) {
      dbInstances[key] = await sequelize.db.load(appConfig.db[key], {
        modelKey: key,
      })
    }
    appConfig.dbInstances = dbInstances
  } else if (Utils._.isString(appConfig.db)) {
    appConfig.dbInstance = await sequelize.db.load(appConfig.db)
  } else {
    throw new Error('Unknow appConfig.db data type!')
  }
}

// uncaught error handler
process.on('unhandledRejection', (err, promise) => {
  console.log('unhandledRejection: ', err)
})
process.on('uncaughtException', err => {
  console.log('uncaughtException: ', err)
})
