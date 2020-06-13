import { Utils } from '@semo/core'
let inited = false

import path from 'path'
import bluebird from 'bluebird'

import Exception from '../exception/Exception'
import errors from '../exception/errors'

import { addGlobalConst } from '../func'

export = async () => {
  if (inited) return
  inited = true

  const appConfig = Utils.getApplicationConfig()

  appConfig.app.db = appConfig.app.db || Utils._.get(appConfig, 'semo-plugin-sequelize.defaultConnection')

  addGlobalConst('ROOT_DIR', path.resolve())
  addGlobalConst('Exception', Exception)
  addGlobalConst('errors', errors)
  addGlobalConst('CFG', appConfig)
  addGlobalConst('Promise', bluebird)
  addGlobalConst('debug', Utils.debug('application'))

  const { sequelize } = await Utils.invokeHook('component')
  // addGlobalConst('API', api(CFG.serviceName))
  // addGlobalConst('redis', await redis.load(CFG.redis)) //  If Redis server is working, you can comment out this line

  if (Utils._.isObject(CFG.app.db)) {
    const dbs = {}
    for (const key of Object.keys(CFG.app.db)) {
      dbs[key] = await sequelize.db.load(CFG.app.db[key], {
        modelKey: key,
      })
    }
    addGlobalConst('db', dbs)
  } else if (Utils._.isString(CFG.app.db)) {
    addGlobalConst('db', await sequelize.db.load(CFG.app.db))
  } else {
    throw new Error('Unknow CFG.app.db data type!')
  }

  addGlobalConst('Op', sequelize.Op)
}

// uncaught error handler
process.on('unhandledRejection', (err, promise) => {
  console.log('unhandledRejection: ', err)
})
process.on('uncaughtException', err => {
  console.log('uncaughtException: ', err)
})
