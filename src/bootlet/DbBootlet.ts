import 'reflect-metadata'
import { Bootlet } from '../interface/Bootlet'
import { Utils } from '@semo/core'
import { Container, Service, Inject } from 'typedi'

@Service()
export class DbBootlet implements Bootlet {
  @Inject('config')
  private config

  async init() {
    const { sequelize } = await Utils.invokeHook('semo:component')
    if (Utils._.isString(this.config.db)) {
      const databaseInstance = await sequelize.load(this.config.db)
      Container.set('databaseInstance', databaseInstance)
    } else {
      throw new Error('Unknow appConfig.db data type!')
    }
  }
  boot(): void {
  }

}
