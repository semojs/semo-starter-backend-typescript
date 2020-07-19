import { Service, Inject } from 'typedi'
import { DemoServiceInterface } from './interface/DemoServiceInterface'

/**
 * 示例服务类
 */
@Service()
export class DemoService implements DemoServiceInterface {


  @Inject('api')
  private api

  async demoMethod(a: number, b: number): Promise<any> {
    const res = await this.api.get('https://jsonplaceholder.typicode.com/posts/1')
    console.log('service method called')
    return res
  }
}
