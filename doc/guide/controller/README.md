# 控制器和路由管理

控制器，路由，参数校验都是来自于 `routing-controllers` 的规范，本脚手架只做应用。借助于 Typescript 的装饰器，控制器和路由可以放在一起声明。

## 自动生成控制器样板代码

```
semo generate controller xxx
```

```js
import { JsonController, Get } from 'routing-controllers'
// import { Inject } from 'typedi'

@JsonController()
export class XxxController {

  /**
   * @api {get} /api/xxx/index index
   * @apiDescription index
   * @apiName GetIndex
   * @apiGroup GroupName
   *
   * @apiParam {Number} id ID.
   *
   * @apiSuccess {String} data info
   * @apiSuccess {String} code 0 means success, others are error code
   */
  @Get('/xxx/index')
  async index () {
    return 'index'
  }
}
```

可以看出，除了一些注释和装饰器，其实我们就是定义了一个不同的 Typescript 类，然后我们通过 `@JsonController` 装饰器告诉框架这是一个 JSON 控制器，需要响应 `application/json` 头信息。通过 `@Get` 装饰器，我们定义了一个路由。整个控制器很好理解，而且将控制器和路由放在一起更方面快速定义和修改。

注意到这里有一大段注释，这是因为框架推荐使用 `Apidoc` 来写接口文档，只要按照规范写，代码 push 到仓库的时候会自动生成相关的接口文档。

还有一个 `typedi` 的代码行被注释了，这是告诉大家这里可以进行依赖注入，具体表现在除了可以将定义的 `Helper` 和 `Service` 用注入的方式引用到控制器当中，而且我们可以自定义装饰器实现注入。

如果我们要返回一个非 JSON 的响应，需要注入 `ctx` 到控制器方法，然后通过 `ctx.json = false` 来禁用 JSON 响应。

## 参数校验

参数校验我们并没有使用之前常用的 `joi` 包，而是用了 `routing-controllers` 配套的 `class-validator`，以下是用法：

### 定义一个校验器类

```js
// src/validation/ProjectValidation.ts
import { IsInt, IsPositive } from "class-validator";
export class ProjectInfo {
  @IsInt()
  @IsPositive()
  id: number
}
```

### 使用校验器

```js
import { ProjectInfo } from '../validation/ProjectValidation'
@JsonController()
export class ProjectController {
...
  async show (
    @Params() params: ProjectInfo
  ) {
    ...
  }
}
```

整个过程，我们只需要定义好校验器类即可。所有校验器使用方式都是类似的，只需要确认参数是从 Query 传过来的还是从 Body 传过来的，极大的简化了代码架构，精简了控制器的代码，增加了一致性和验证规则的复用性。
