import 'reflect-metadata'
import { useKoaServer, useContainer as routingControllersUseContainer } from 'routing-controllers'
import { Container, Inject, Service } from 'typedi'
import logger from 'koa-logger'
import { Bootlet } from '../interface/Bootlet'
import Koa from 'koa'

routingControllersUseContainer(Container)


@Service()
export class AppBootlet implements Bootlet {
  public K8S_PORT = 8080

  @Inject('config')
  public config

  init() {
  }
  boot(): void {
    const app = new Koa()
    app.use(logger())
    app.proxy = true

    useKoaServer(app, {
      defaultErrorHandler: false,
      cors: true,

      classTransformer: true,
      validation: {
        skipMissingProperties: true,
        forbidUnknownValues: false
      },

      // routePrefix: '/api', // 给所有接口添加路由前缀
      controllers: [__dirname + './../controller/*'],
      middlewares: [__dirname + './../middleware/global/*']
    })

    let port = this.config.port
    if (process.env.IN_K8S && parseInt(process.env.IN_K8S)) {
      port = this.K8S_PORT
    }

    app.listen(port)
    console.log(`Listening on port http://localhost:${port}`)

  }

}
