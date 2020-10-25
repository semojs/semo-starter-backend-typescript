import { Utils } from '@semo/core'
import errors from '../exception/errors'
import { Config } from '../decorator/ConfigDecorator'

const { ERROR_UNKNOWN } = errors

/**
 * 默认异常处理，为了实现统一的异常格式
 *
 * 如果业务需要，可以基于这个类扩展自定义异常类。
 * 本框架引入的一些第三方包定义其他异常类不遵循这个规范
 */
class Exception extends Error {

  @Config('serviceName', 'app')
  serviceName

  /**
   * 错误码
   */
  code: string

  /**
   * 错误消息
   */
  msg: string

  /**
   * 错误响应 `HTTP` 状态码
   */
  status: number

  /**
   * 初始化一个异常类
   *
   * @param code 错误码
   * @param msg 错误消息
   * @constructor
   */
  constructor (code, msg = '') {
    let errMsg, status
    const errCode = code || ERROR_UNKNOWN // 默认 code = 1
    if (errors[errCode]) {
      errMsg = msg || errors[code].msg
      status = errors[code].status
    } else {
      errMsg = '未知错误'
      status = errors[ERROR_UNKNOWN].status
    }

    super(errMsg)

    this.code =
      Utils._.chain(this.serviceName)
        .snakeCase()
        .toUpper() +
      '_' +
      errCode
    this.msg = errMsg
    this.status = status
  }
}

export = Exception
