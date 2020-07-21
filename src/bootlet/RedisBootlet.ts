import { Bootlet } from '../interface/Bootlet'
import { Utils } from '@semo/core'
import { Container, Inject, Service } from 'typedi'

@Service()
export class ApiBootlet implements Bootlet {
  @Inject('config')
  private config

  async init() {
    const { redis } = await Utils.invokeHook('semo:component')
    const redisInstance =  await redis.load(this.config.redis) //  If Redis server is working, you can comment out this line
    Container.set('redisInstance', redisInstance)
  }
  boot(): void {
  }

}
