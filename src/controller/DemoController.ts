import { JsonController, Get } from 'routing-controllers'
import { Inject } from 'typedi'
import { ConfigInject } from '../decorator/ConfigDecorator'
import DemoService from '../service/DemoService'

/**
 * @apiDefine DemoGroupName 示例分组
 */

@JsonController()
export class DemoController {

  @Inject()
  demoService: DemoService

  @ConfigInject('c.d', 5678)
  public port: string

  /**
   * @api {get} / 示例接口
   * @apiDescription 示例接口描述
   * @apiName GetIndex
   * @apiGroup DemoGroupName
   *
   * @apiSuccess {String} data info
   * @apiSuccess {String} code 0 means success, others are error code
   */
  @Get('/')
  async index () {
    return this.port
    // return 'Hi' + this.demoService.demoMethod(1, 2)
  }
}
