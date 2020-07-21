import 'reflect-metadata'
import config from './config';
import { Container } from 'typedi'

export class Application {

  constructor() {
    process.on('unhandledRejection', this.handlerRejection)
    process.on('uncaughtException', this.handlerException)
  }

  public async init() {

    for (const bootlet of config.bootlets) {
      const instance = Container.get(bootlet)
      await instance.init()
    }
  }

  public async boot() {
    try {
      await this.init()
      console.log('Init success')

      for (const bootlet of config.bootlets) {
        const instance = Container.get(bootlet)
        await instance.boot()
      }
    } catch (e) {
      console.trace(e)
      process.exit(1)
    }
  }

  protected handlerRejection(err, promise) {
    console.log('unhandledRejection: ', err)
  }

  protected handlerException(err) {
    console.log('uncaughtException: ', err)
  }
}




