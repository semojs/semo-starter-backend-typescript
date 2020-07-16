# REPL

REPL(read-eval-print-loop)：交互式解析器，每一个现代的编程语言大概都有这类交互环境，在里面我们可以写一些简单的代码，做为一个快速了解和学习语言特性的工具。但是当 REPL 可以和框架或者业务项目结合以后，可以发挥出更大的作用。

这里不会介绍基本的 REPL 用法，这部分可以去看 Node 的[官方文档](http://nodejs.cn/api/repl.html)；这里更多的是介绍我们为 REPL 增加的东西。

## 启动 REPL

Starter 定一个了一个 script，因此你可以有多种方式进入 REPL

```bash
npx semo repl
semo repl # 如果全局安装了 Semo
npm run repl
yarn repl # 如果全局安装了 yarn
```

## 关于 `--hook` 选项

由于我们通过为 REPL 注入一些业务逻辑代码增加 REPL 的作用，但这个过程往往需要花一些时间，所以我们可以选择不注入任何业务来启动一个 REPL，如果指定了 `--hook`，就会调用各个插件和项目里的 `hook_repl` 把数据和对象方法注入进去。

借助 `Semo` 的配置扩展机制，我们在 `.semorc.json` 里指定了 `hook:true`，这样就改变了 repl 命令的参数默认值，不用每次都传这个参数了。

## 关于下划线 _

我们习惯把 lodash 包加载进来的时候赋值给 `_`，甚至想把这个复制给全局变量，这样只需要包含一次，但是这样一来，如果我迭代 REPL 和项目的初始化就会出现冲突报错，所以我们全局里是没有 lodash 的 `_` 的，我们通过 `Utils._` 来获取到 Lodash。

```bash
>>> Utils._.VERSION
```

## 关于退出

默认 REPL 的退出只能通过 `ctrl+c` 或者 `ctrl+d` 或者 `.exit` 来进行，这里我们加入了几个快捷的命令，`quit`, `q`, `exit`。

## `await`

在开发Zignis 和这个脚手架时，`Node` 的 REPL 本身还不支持 `await`，这里是模拟实现了这个机制，目的是可以触发执行项目中的一些 promise 或 generator 方法，目前经测试，单独的 Promise 方法也是可以执行得到结果的。在较新的 Node 版本下，如果只是查看一个 `Promise` 的返回值，连 `await` 都是不需要的。

## 在 REPL 访问数据库的例子

```bash
yarn repl --hook
>>> const { Account } = await Semo.sequelize.load('db1')
>>> await Account.count()
```

注意，这里的访问数据库不依赖任何项目的初始化和helper 函数，完全是 Semo 内置的能力。但是如果项目中根据钩子将项目的资源注入到 REPL，则可以在这里去调用项目指定的方法。注入到 REPL 的钩子如下方式调用：

```js
// bin/semo/hooks/index.js
const init = require('../../../init')

module.exports = {
  /**
   * Implementation of hook_repl
   * 为 REPL 注入初始化环境
   */
  async hook_repl () {
    await init()
  },
}
```

这里要注意，由于把资源注入到了全局，所以是调用的 init()方法，通常情况下，可以通过 return 一个对象的方式，给 REPL 注入私有的对象。

:::tip
本脚手架为 repl 注入了整个项目的 helpers 和 services，所以我们开发业务逻辑的时候可以先不定义接口，通过 REPL 来测试方法逻辑也是可以的。
:::

## 访问 Redis

```
yarn repl --hook
>>> const redis = await Semo.redis.load('redis1')
>>> await redis.keys('*')
```

## 注入的基础设施实现方式

基础设置一般都是第三方远程提供的服务，这里我们都可以进行封装和初始化，然后通过 `hook_repl` 和 `hook_component` 注入环境中给项目使用。对于需要跨项目复用的基础设施，还可以开发专门的 `Semo` 插件进行跨项目共享。
