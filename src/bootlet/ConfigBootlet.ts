import { Bootlet } from '../interface/Bootlet'
import { Container, Service } from 'typedi'
import { Utils } from '@semo/core'
import path from 'path'

@Service()
export class ConfigBootlet implements Bootlet {
  constructor() {

  }
  public init(): void {
    Utils.extendConfig('application.yml', '$app')
    const appConfig = Utils.config('$app') || {}
    appConfig.ROOT_DIR = path.resolve()

    appConfig.db = appConfig.db || Utils.config('$plugin.sequelize.defaultConnection')

    Container.set('config', appConfig)
  }

  public boot(): void {
    // Do nothing
  }
}
