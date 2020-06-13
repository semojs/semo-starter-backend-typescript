import init from './init'
import createApp from './create-app'

const K8S_PORT = 8080

async function start () {
  try {
    await init()
    console.log('Init success')

    // 一切就绪，最后启动服务
    const app = createApp()
    let port = CFG.app.port
    if (process.env.IN_K8S && parseInt(process.env.IN_K8S)) {
      port = K8S_PORT
    }
    app.listen(port)
    console.log(`Listening on port http://localhost:${port}`)
  } catch (e) {
    console.trace(e)
    process.exit(1)
  }
}

start()
