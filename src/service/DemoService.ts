/**
 * Service 和 Helper 类似，可以用来被 Controller 调用
 * Service 可以用于封装第三方资源，例如其他微服务，第三方接口，第三方数据库直连
 * 可以一个文件定义一个Service，也可以定义多个子Service，这里演示的是一个 Service
 */

import { Service } from 'typedi'

/**
 * 示例服务类
 */
@Service()
class DemoService {

  /**
   * 示例服务方法
   * @param a Param A
   * @param b Param B
   * @returns Return a string
   */
  demoMethod(a: number, b: number): number {
    return a + b
  }
}

export = DemoService
