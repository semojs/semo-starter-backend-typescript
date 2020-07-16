import { Service } from 'typedi'
import { DemoServiceInterface } from './interface/DemoServiceInterface'

/**
 * 示例服务类
 */
@Service()
export class DemoService implements DemoServiceInterface {
  demoMethod(a: number, b: number): number {
    console.log('service method called')
    return 3
  }
}
