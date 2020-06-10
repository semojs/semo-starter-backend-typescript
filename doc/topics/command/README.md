# 命令管理

对于一个业务后端服务或者底层服务的运维，除了确保服务的稳定运行，接口效率，异常排查之外，还可能有一些常规动作，比如快速获得一些信息，或者快速对数据状态进行更改，这些需求有时是临时需求，有时候会不断重复提类似的。比如：重置用户密码，重置用户 Token 等等。

对于这类需求，在没有后台支持的情况下，我们往往只能直接去修改数据库，这很不方便，而有时非常不直接，可能修改之前需要先执行几个复杂的计算逻辑，这样就更是会耗费很长的时间做这些手动操作。对于同样的一个运维功能，当然开发成后台可以让更多的人使用，但是一方面开发成后台的成本比较高，另外不是所有的功能都应该或者适合开发成后台的，比如一些危险的操作。说了这么多，主要是想说业务相关的命令行工具在日常运维中非常重要。

## 插件命令与项目命令

每个 Semo 的插件可能都会定义一些命令，以完成一些功能，插件的命令更多的是可复用的非业务功能，而项目内定义的命令大都是和这个项目密切相关的，可以是检索和查看命令，也可以是问题数据的自动修复，数据的批处理等等。

## 定义一个命令

理论上，可以随意定义一级子命令，只要不与内置命令重复。但是我们还是推荐少占用一级子命令。另外，我们可以约定每个项目的子命令都挂在 application 这个一级子命令下。这样，我们可以为 application 建立别名快捷方式。

脚手架目前已经内置了 application 这个一级子命令，只需要去自定义二级子命令即可。

``` bash
npm install semo-plugin-application
semo generate command --extend=application application/a-command 'a command'
semo generate command --extend=application application/a-command/sub-command 'a sub command'
```

## 命令行文件写法

Semo 的命令行是基于 `yargs` 这个 npm 包提供的机制设计的，同时做了一些简单的扩展，通过 `semo make command` 可以自动生成一个命令样板文件。

```bash
$ semo generate command --extend=semo application/test
```

```js
export const disabled = false // Set to true to disable this command temporarily
export const command = 'test'
export const desc = 'test'
// export const aliases = ''
// export const middleware = (argv) => {}

export const builder = function (yargs: any) {
  // yargs.option('option', { default, describe, alias })
  // yargs.commandDir('test')
}

export const handler = async function (argv: any) {
  console.log('Start to draw your dream code!')
}
```

## 常用的 Semo 工具方法

Semo 向外暴露了一个工具对象，里面内置了很多方法和常用包的引用，这里和开发命令行很相关的有如下几个：

```js
import { Utils } from '@semo/core'

Utils._ // lodash
Utils.inquirer // 终端输入提示

Utils.log()  // 基本的对象输出，复杂对象可以美化输出结构
Utils.info() // 信息提示，默认颜色输出为蓝色
Utils.warn() // 警告提示，默认颜色输出为黄色
Utils.success() // 成功提示，默认颜色输出为绿色
Utils.error() // 错误提示，默认颜色输出为红色，并会退出脚本
```
