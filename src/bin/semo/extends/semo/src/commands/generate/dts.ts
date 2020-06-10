/**
 * 自动生成全局变量声明文件，当数据库有新表时需要重新生成，用于 typescript 的自动提示
 *
 * example:
 *   semo generate dts
 *
 * TODO:
 * 探索是否能够把提示做到字段一级，目前只能提示到表
 */
import { Utils } from '@semo/core'
import path from 'path'
import fs from 'fs'
import init from '../../../../../../../init'

export const command = 'dts'
export const desc = 'Generate global dts file'

export const builder = function (yargs) {}

export const handler = async function (argv) {
  await init()

  const singleDbTemplate = (db, indentation) => {
    const blank = ' '.repeat(indentation)
    const modelList = Object.keys(db.models)
      .map(model => {
        return `${blank}  const ${model}: ModelCtor<Model>`
      })
      .join('\n')

    return `${blank}namespace models {
${modelList}
${blank}}
`
  }

  const multiDbTemplate = (db, indentation) => {
    const blank = ' '.repeat(indentation)
    return Object.keys(db)
      .map(item => {
        return `${blank}namespace ${item} {
${singleDbTemplate(db[item], indentation + 2)}
${blank}}`
      })
      .join('\n')
  }

  let dbTemplate = ''
  if (Utils._.isObject(CFG.db)) {
    dbTemplate = multiDbTemplate(db, 4) // eslint-disable-line
  } else if (Utils._.isString(CFG.db)) {
    dbTemplate = singleDbTemplate(db, 4) // eslint-disable-line
  } else {
    throw new Error('Unknow CFG.db data type!')
  }

  const dtsFile = path.resolve('./src/global.d.ts')
  const code = `// -- GENERATED AUTOMATICALLY, DO **NOT** EDIT MANUALLY! --

import { Sequelize, Model, ModelCtor, Op as Ops } from 'sequelize/types'
import axios from 'axios'
import * as Redis from 'ioredis'
import * as Errors from './exception/errors'
import ExceptionClass from './exception/Exception'

declare global {
  const Exception: typeof ExceptionClass
  const errors: typeof Errors
  const Op: typeof Ops
  const API: typeof axios
  const debug: any
  const Raven: any
  const ROOT_DIR: any
  const redis: typeof Redis.Redis
  const CFG: any
  namespace db {
${dbTemplate}
  }
}
`
  fs.writeFileSync(dtsFile, code)
  process.exit(0)
}
