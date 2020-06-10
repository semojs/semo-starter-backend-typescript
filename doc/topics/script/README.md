# 脚本管理

后端服务，尤其是业务后端，经常需要写一些脚本，包括但不限于导入数据，处理数据，统计数据，导出数据等等。一旦多了以后就不好管理了，不知道哪些是一次性的，哪些是仍然在使用的。这里脚手架提供了统一的脚本管理方式。

## 创建一个脚本样板文件

```
semo generate script test
./bin/semo/scripts/20190426134151995_test.ts created!
```

生成的样板文件大致如下：

```
import { Utils } from '@semo/core'

export const builder = function (yargs) {
  // yargs.option('option', {default, describe, alias})
}

export const handler = async function (argv) {
  Utils.info('I am a test script!', true)
}

```

注意到，这里生成的脚本和计划任务或者命令都比较相似，也是一个 node 模块，返回的对象里包括两个属性：

```
builder: 定义脚本的选项
handler: 脚本的处理函数，支持 async/await
```

这么做是为了实现脚本和命令的统一，以及整个 Semo 代码风格的统一，脚本和命令都是支持参数选项的，区别主要是脚本大多是处理一些临时需求，不会长期存在，而命令则是整个系统的一部分，是会不断使用和强化的。

## 脚本的管理

首先从自动生成的名字可以看出脚本的创建时间，另外，推荐在每个脚本头部写下比较详细的注释，包括但不限于背景，用途，用法，注意事项等等。
另外，可以在脚本目录建分类子目录，例如 `archive`，让脚本目录下直接放置的都是最活跃使用的脚本，其余放置到不同类型的目录里，方便再次需要时快速查找。
