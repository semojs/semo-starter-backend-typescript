# 全局变量

虽然说一个良好的架构应该尽可能的减少全局变量的使用，但目前我们为了框架的简单还是使用了一些全局变量。为了在 `Typescript` 环境下使用全局变量，我们为全局变量增加了 `global.d.ts` 类型声明文件，并且这个文件是可以自动生成和更新的。

## 添加全局变量的工具方法

```js
// src/func.ts
export const addGlobalConst = (name, value) => {
  // Object.defineProperty 定义值默认为不可配置，不可枚举，不可写
  Object.defineProperty(global, name, { value: value })
}

```

这个方法在 global 对象上定义键值对，使用的是 `Object.defineProperty` 方法，这么定义隐含的意思是定义的键值对是不可修改的，也就是是一个 `const` 常量。

## 其他全局变量

* db: 全局数据库实例，这里我们假设的是一个服务只连一个数据库，如果需要连多个，更倾向于定义成一个对象，例如 `db.db1`, `db.db2`。
* Op: Sequelize v4开始数据库操作已经不建议使用 `$eq` 这种了，而是需要用 `Op.eq` 代替。
* ROOT_DIR: 项目根目录路径
* Exception: 异常对象，需要使用时直接 `throw new Exception('xxx')` 即可，另外如果认为有必要，也可以定义更多的异常对象类型。
* errors: 错误码对象，我们在这里进行错误码的定义。具体请看错误码小节。
* CFG: 配置对象，Consul 配置也会合并进来。
* Promise: 封装的 Bluebird。
* debug: 封装的 `debug` 包， 调试信息都是基于 `application` 这个前缀的。
* API: 封装的 `axios` 包，默认已经把 `X-Service` 支持了，而且还对我们各服务返回值进行了初步的识别和兼容。
* redis: 封装的 `ioredis` 包，已经连接上了，如果需要 `Pub/Sub` 机制，可以链接多个，例如： `redisPub` 和 `redisSub`。


当然这里只是初步定义了一些全局变量，如果你觉得有必要可以按需调整。

:::tip
为什么没有把 `lodash` 放进来，因为 lodash 一般我们习惯命名成 `_`，但是做为公共的 init 文件，我们也要在 [REPL](../../topics/repl/) 中使用，这样会与 REPL 里的 `_` 用法冲突。如果需要使用 `lodash`，可以用的时候再 `import`，也可以用 `Semo` 里内置的：

```js
import { Utils } from '@semo/core'

Utils._.forEach()
```
:::
