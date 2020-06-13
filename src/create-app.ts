import 'reflect-metadata'
import { useKoaServer, useContainer as routingControllersUseContainer } from 'routing-controllers'
import { Container } from 'typedi'
import logger from 'koa-logger'

routingControllersUseContainer(Container)

import Koa from 'koa'

const app = new Koa()

app.use(logger())

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
