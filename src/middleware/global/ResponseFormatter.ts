import { Utils } from '@semo/core'

import { Middleware, KoaMiddlewareInterface, BadRequestError } from 'routing-controllers'
import errors from '../../exception/errors'
const { ERROR_UNKNOWN, ERROR_BAD_PARAMS } = errors

/**
 * 全局响应格式中间件
 */
@Middleware({ type: 'before' })
export class ResponseFormmater implements KoaMiddlewareInterface {
  /**
   * 接口方法
   *
   * @param ctx
   * @param next
   */
  async use (ctx: any, next: (err?: any) => Promise<any>): Promise<any> {
    const ServicePrefix = Utils._.chain(CFG.serviceName).snakeCase() .toUpper()
    try {
      // TODO: 用装饰器实现这一功能
      ctx.json = true // 默认启用 json 格式响应，如果控制器手动关闭，则直接返回 return 的内容
      if (ctx.path === '/healthCheck') {
        ctx.body = 'ok'
        return
      }

      const startTime = new Date()
      ctx.reqId =
        Utils.day(startTime).format('YYYYMMDD_HHmm_ssSSS') +
        '_' +
        Utils._.padStart(Utils._.random(0, 0xffffffff).toString(16), 8, 0)

      await next()

      if (ctx.body && ctx.json) {
        ctx.body = {
          code: 0,
          reqId: ctx.reqId,
          data: ctx.body
        }
      }

    } catch (e) {
      console.error(e)
      if (e instanceof Exception) {
        // 有准备的已知错误
        ctx.status = e.status || 500
        ctx.body = {
          reqId: ctx.reqId,
          code: e.code,
          msg: e.msg
        }
      } else if (e instanceof BadRequestError) {
        ctx.status = errors[ERROR_BAD_PARAMS].status || 400
        ctx.body = {
          reqId: ctx.reqId,
          code: `${ServicePrefix}_${ERROR_BAD_PARAMS}`,
          msg: e.message ? e.message : errors[ERROR_BAD_PARAMS].msg,
          // @ts-ignore
          errors: e.errors,
          name: e.name
        }
      } else {
        // 未知错误
        ctx.status = errors[ERROR_UNKNOWN].status || 500
        ctx.body = {
          reqId: ctx.reqId,
          code: `${ServicePrefix}_1`,
          msg: '未知错误'
        }
        // 未知错误通过sentry告知项目负责人
        if (CFG.sentryDSN && process.env.NODE_ENV === 'production') {
          Raven.captureException(e, { req: ctx.request }, (sendErr, eventId) => {
            if (sendErr) {
              console.error('Failed to send to Sentry')
            } else {
              console.log(`Sentry event id: ${eventId}`)
            }
          })
        }
      }
      if (process.env.NODE_ENV !== 'production' && e) {
        ctx.body.stack = e.stack // 调用栈返给前端
      }
    }
  }
}
