# 目录结构

这里对项目的目录结构做一些基本的约定，业务项目在继续开发时可以选择打破这些规范，这里的目的只是为了给大家一个初始规范，进一步的升级或者变更需要业务项目组内部约定好。

这个 Starter 极大的整合了 `Routing Controllers` 项目，所以一些分层都是遵守这个项目的原则的。

## 主要目录及文件说明

:::tip
这里我们倾向于单数形式的目录名，对于目录命名，我们认为单数和复数都可以，但是最好不要混用。
:::

```
├── config
├── config.db.js
├── deploy
├── package.json
└── src
  ├── bin
  ├── controller
  ├── create-app.ts
  ├── decorator
  ├── exception
  ├── func.ts
  ├── global.d.ts
  ├── helper
  ├── index.ts
  ├── init
  ├── middleware
  ├── migration
  ├── model
  ├── service
  └── validation
```

上面将一些次要目录或文件去掉了，可以看的清楚一些，相关目录或文件的用途如下：

* `config`: 基于 `config` npm 包，保存了项目级的配置，非敏感信息，公共配置存放到 `config/default.js`，各环境特殊配置分别有自己的配置文件。
* `config.db.js`: 是为 `sequelize-cli` 的 `.sequelizerc` 提供数据库连接信息的配置文件，一般无需修改。
* `deploy`: 这个目录和部署相关，我们测试环境和线上环境都基于 `k8s`，容器内部都基于 `pm2`。
* `src/bin`: 用于放置一些命令脚本，`Semo` 命令行相关扩展都放在 `src/bin/semo`，但是业务项目也可能需要其他形式的命令脚本。
* `src/controller`: 后端 MVC 分层中的 Controller 层，和路由关联。
* `src/create-app.ts`: 初始化 `koa`，加入各种中间件。
* `src/decorator`: 自定义装饰器。
* `src/exception`: 异常相关，目前用于定义异常类型，错误码等
* `src/func.ts`: 工具函数
* `src/global.d.ts`: 全局变量声明文件，为了兼容全局变量，能够自动生成，业务项目需要将其加入到代码仓库，里面有自动生成的模型类型声明。
* `src/helper`: 在 `Controller` 和 `Model` 中间，需要加一个 `Helper` 层，用于封装复杂一些的业务逻辑，被 `Controller` 调用。
* `src/index.ts`: 入口启动文件
* `src/init`: 初始化阶段，简单的初始化放在 `src/init/index.ts` 里，复杂的初始化逻辑要在独立的文件里进行。
* `src/middleware`: 项目中间件，`src/middleware/global` 是全局中间件，其他是按需调用的。
* `src/migration`: 记录数据库的每一次变更，由于没有 `Schema` 层，每一次数据库变更都需要通过 `Migration` 机制。
* `src/model`: 模型目录，每个模型一个文件，可以在里面定义模型方法，模型实例方法，虚拟模型变量，模型关系，以及为了更好的类型提示，对字段进行 `ts` 类型声明。
* `src/service`: 这里建议放的是业务对第三方资源的封装，可能是其他微服务，可能是外部接口，也可能是远程连库。
* `src/validation`: 这里是为接口参数提供的校验机制，将校验从控制器中剥离可以让控制器更加简洁。
* `src/test`: 放的是单元测试脚本，【暂时缺失】

## 一些约定

* `Controller` 只对 `Router` 负责，不要相互调用，也不要被其他层调用。
* 尽量不要在 `Controller` 直接调用 `Model`，只调用 `Helper` 或 `Service`。
* Service 封装第三方资源，可以调用 Helper 也可以调用 Model。
* 数据库一般一个项目只连一个进行读写，但是一些稍微复杂的项目，可能会同时连接多个库，我们一般不推荐一个项目同时写多个库，读的话还可以接受。
* 这里没有内置异常捕获（比如 Sentry)，配置管理 （比如  Consul)，需要大家基于实际的平台架构来扩展。

