import { Utils } from '@semo/core'
let inited = false

import path from 'path'
import bluebird from 'bluebird'
import CFG from 'config'

import Exception from '../exception/Exception'
import errors from '../exception/errors'

import { addGlobalConst } from '../func'

export = async () => {
  if (inited) return
  inited = true

  addGlobalConst('ROOT_DIR', path.resolve())
  addGlobalConst('Exception', Exception)
  addGlobalConst('errors', errors)
  addGlobalConst('CFG', CFG)
  addGlobalConst('Promise', bluebird)
  addGlobalConst('debug', Utils.debug('application'))

  const { sequelize } = await Utils.invokeHook('component')
  // addGlobalConst('API', api(CFG.serviceName))
  // addGlobalConst('redis', await redis.load(CFG.redis))

  if (Utils._.isObject(CFG.db)) {
    const dbs = {}
    for (const key of Object.keys(CFG.db)) {
      dbs[key] = await sequelize.db.load(CFG.db[key], {
        modelKey: key,
        raw: true, // 全局默认范围值为 JSON，原因是这个 routing_controller 封装对默认的对象返回值支持不够友好
      })
    }
    addGlobalConst('db', dbs)
  } else if (Utils._.isString(CFG.db)) {
    addGlobalConst('db', await sequelize.db.load(CFG.db, {
      raw: true, // 全局默认范围值为 JSON，原因是这个 routing_controller 封装对默认的对象返回值支持不够友好
    }))
  } else {
    throw new Error('Unknow CFG.db data type!')
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
