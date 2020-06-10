import 'reflect-metadata'
import { useKoaServer, useContainer as routingControllersUseContainer } from 'routing-controllers'
import { Container } from 'typedi'

routingControllersUseContainer(Container)

import Koa from 'koa'

const app = new Koa()

export = () => {
  app.proxy = true

  useKoaServer(app, {
    defaultErrorHandler: false,
    cors: true,

    classTransformer: true,
    validation: {
      skipMissingProperties: true,
      forbidUnknownValues: false
    },

    routePrefix: '/api', // 给所有接口添加路由前缀
    controllers: [__dirname + '/controller/*'],
    middlewares: [__dirname + '/middleware/global/*']
  })

  return app
}
