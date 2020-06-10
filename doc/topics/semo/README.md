# Semo 用法

更详细的 Semo 用法可以参考[官方文档](https://semo.js.org)，这里只做一些简单的说明。

## 在脚本中引用

目前 `Semo` 除了做为命令行工具，暴露出的对象只有一个，所以看起来都是下面这样进行引入的：

```
import { Utils } from '@semo/core'
```

## Utils里都包含什么

### 一些常用npm 包

到目前为止，Utils 包含了大量的第三方 npm 包，这些包目前没有分使用场景，都包含进来了，后面会考虑优化，目前考虑的是业务方可以少引入几个包，由于经常维护更新，这里不一定是最新的，可以参考最新 Semo 版本的 package.json 文件。

```js
const fs = require('fs-extra')
const glob = require('glob')
const { table } = require('table')
const findUp = require('find-up')
const _ = require('lodash')
const colorize = require('json-colorizer')
const stringify = require('json-stringify-pretty-compact')
const chalk = require('chalk')
const day = require('dayjs')
const co = require('co')
const shell = require('shelljs')
const debug = require('debug')
const inquirer = require('inquirer')
const fuzzy = require('fuzzy')
const emoji = require('node-emoji')
```

### 一些 Semo 自定义的方法

```bash
md5 # 简单封装个 md5
delay # 模拟延迟，单位 ms，别名：sleep
splitComma # 根据空格和逗号切分字符串
log # 输出普通的 log
warn # 输出警告
info # 输出一般信息
success # 输出成功信息
error # 输出错误信息
outputTable # 输出表格
invokeHook # 调用钩子，这个函数比较常用
extendSubCommand # 定义子命令目录，实现了让其他插件扩展自己的目的，在插件中用的比较多
getAllPluginsMapping # 返回所有的插件
getCombinedConfig # 返回合并后的配置
getApplicationConfig # 返回应用配置
exec # 调用其他 shell 命令，和 shelljs.exec 有差异
```

### 通过 Semo 获取其他插件注入的资源

以数据库和缓存插件为例

```
// sequelize 封装了对各个数据库的链接，内置支持 postgres,mysql, sqlite
// redis 封装了 Redis
const { sequelize, redis } = await Utils.invoke('components)
```

使用同样的方式可以继续封装的更多

由于连接都是基于 Consul 的，而 Consul 是分本地和线上环境的，所以基本上可以说自然获得了环境隔离的能力。

## 当做命令行工具

Semo 和 Semo 的插件以及整合了 Semo 的项目都会定义大量的命令，具体可以查看帮助：

```
semo help
semo --help
semo -h
```

:::tip
这里的命令是多层级的，如果发现你可能想要用的子命令，还需要继续用 help 查看里面是否还有子命令，或者查看命令是否有其他选项可用，例如：
```
semo generate help
```
:::

:::tip
有些命令我们经常执行，为了少敲几个字符，建议建立别名，配置到 `.bashrc` 或者 `.zshrc` 文件里，一般常用的别名如下：
```bash
alias sql="semo sequelize"
```
:::

## 定义自己的命令

当你有需要重复执行的脚本需求，就要考虑是否需要封装成一个命令，具体方式可以参看 Semo 文档以及本文档的命令管理小节，也可以参看其他插件的源码。

## 使用 REPL 模式

REPL 模式可以帮助我们快速访问一些方法，验证 js 逻辑，是高效开发的一个辅助开发工具。进入 REPL 模式：

```
semo repl
```

默认里面只有一个 Semo 的 Utils 对象，加入 `--hook` 参数可以加载项目和插件注入的资源和方法。更多使用 REPL 的技巧可以查看 REPL 小节。

