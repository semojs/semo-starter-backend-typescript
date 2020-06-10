# Helper & Service

`Helper` 建立在模型之上，根据业务进行划分，每个 Helper 可能同时读取多个数据表里的数据，在有一些框架里会称为 Repositery。`Service` 是对远程服务的封装，或者说一切没在自己管理的数据库的资源都需要封装为 Service。

所有的 `Helper` 和 `Service` 都是通过 `typedi` 提供的依赖注入的方式进行使用的，而不是 `import` 之后直接使用。

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

## Helper

### 定义 Helper

```js
import { Service } from 'typedi'

import { ModelInject } from '../decorator/DatabaseDecorator'
import Project from '../model/Project'

@Service()
export class ProjectHelper {
  @ModelInject(Project)
  project: typeof Project
}

```

可以看到这里也是用的 `typedi` 实现思路完全一样。不一样的地方是我们为了定义操作数据库的方法，需要使用 `Sequelize` 的数据模型，注意这里是如何注入的，用的是我们自定义的装饰器 `@ModelInject()`，同时为了类型提示，需要引入模型文件。

:::tip
定义装饰器是本脚手架的高级用法，具体可以看 `routing-controllers` 和 `typedi` 的文档看看，这里不做详细解释了。
:::

### 使用  Helper

```js
...
import { ProjectHelper } from '../helper/ProjectHelper'

export class ProjectController {

  // 注入一个 Helper，这里不推荐同时注入模型
  // 控制器只跟 Helper 和 Service 交互
  @Inject()
  projectHelper: ProjectHelper
...
```

这里要注意注入 Helper 和给 Helper 注入数据模型实例稍微有一些不同，如果混用会很奇怪，建议所有的数据操作都调用 Helper。
