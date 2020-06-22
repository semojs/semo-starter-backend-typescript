# Service

所有的 `Service` 都是通过 `typedi` 提供的依赖注入的方式进行使用的，既可以封装数据库业务操作，也可以封装远程服务业务操作。

## Service

### 定义 `Service`

```js
import { Service } from 'typedi'

@Service()
class DemoService {

  /**
   * DemoService->demoMethod
   */
  demoMethod() {
    return 'This is a demo service'
  }
}

export = DemoService
```

注意到这里用了一个 `typedi` 提供的装饰器： `@Service()`

### 使用 `Service`

我们可以在 Controller 里使用 Service，也可以在其他比如命令行工具，或者其他 Service 中使用。注意注入 `Service` 用的是 `typedi` 的 `@Inject()` 装饰器。

```js
import { Inject } from 'typedi'
import DemoService from '../service/DemoService'
...
export class DemoController {
...
  @Inject()
  demoService: DemoService
  ...
  async index () {
    return 'Hi'
  }
}
```
