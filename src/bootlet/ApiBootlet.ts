import { Bootlet } from '../interface/Bootlet'
import { Utils } from '@semo/core'
import { Container, Service } from 'typedi'

@Service()
export class ApiBootlet implements Bootlet {
  async init() {
    const { api } = await Utils.invokeHook('semo:component')
    Container.set('api', api('application'))
  }
  boot(): void {
  }

}
