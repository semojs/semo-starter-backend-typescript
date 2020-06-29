import { Service } from 'typedi'
import { DemoServiceInterface } from './interface/DemoServiceInterface'

/**
 * 示例服务类
 */
@Service()
export class DemoService implements DemoServiceInterface {
  demoMethod(a: number, b: number): number {
    throw new Error("Method not implemented.")
  }
}
