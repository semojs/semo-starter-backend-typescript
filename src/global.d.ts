// -- GENERATED AUTOMATICALLY, DO **NOT** EDIT MANUALLY! --

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
    namespace models {
      const SequelizeMeta: ModelCtor<Model>
      const Project: ModelCtor<Model>
    }

  }
}
