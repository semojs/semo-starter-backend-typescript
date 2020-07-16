# 快速上手

本文档的目的是让你可以快速开始，把项目跑起来，暂时先不解释里面的各个部分。

## 全局安装 Semo 命令行工具

`Semo` 命令行工具是一个辅助工程师开发，运维和调试的命令行工具，我们建议你在本地环境全局安装，具体的使用说明可以参考：[这里](https://semo.js.org)

```
npm i -g @semo/cli
```

## 初始化一个后端项目

```
semo create YOUR_PROJECT REPO_URL
cd YOUR_PROJECT
yarn dts # 更新全局变量声明文件 /src/global.d.ts，这个文件需要加入代码仓库，否则线上构建会失败
yarn watch # 实时 typescript 编译
yarn start # 启动后端
yarn cron # 启动计划任务，如果不写计划任务可以不启动
```
执行以后应该就可以看到项目在本地的8080端口跑起来了：http://localhost:8080。

### 也可以通过 pm2 启动

```
yarn watch # 单开一个窗口，和 pm2联动，可以实现保存之后编译，然后重启 pm2
yarn start:pm2 # 启动 pm2，可以重复执行，执行后自动打开日志
yarn stop:pm2 # 停止 pm2，实际逻辑是删除了 pm2 实例
```

## 脚手架代码生成器

```
$ semo generate help

semo generate <component>

Generate component sample code

命令：
  semo generate command <name> [description]               Generate a command template
  semo generate plugin <name>                              Generate a plugin structure
  semo generate script <name>                              Generate a script file
  semo generate cron <name>                                Generate a semo cron job file
  semo generate migration <dbKey> <tableName> [fieldName]  Generate a db migration
  semo generate controller <name>                          Generate a application model
  semo generate dts                                        Generate global dts file
  semo generate model <name>                               Generate a application model
```

## 访问和编写文档

本项目的开源版本把文档托管在对应的 `Github Pages` 里，如果你使用这个 Starter 来开发你的业务项目，建议也通过比如 Gitlab Pages 或者简单的 Web 服务把文档部署成可访问可随着项目提交一起更新的模式。

在开发时要尽量实现开发和编写相关文档的同步，第一时间记录文档是最省力的，而编写技术文档是提升项目生命力的有效手段，每个新加入团队的成员都会感激你在编写文档上所做的努力。编写文档使用我们常用的开发工具即可，对我们来说通常是 `VSCode`，然后运行如下命令，一边编写一遍预览：

```
yarn docs:dev
```

## REPL交互模式

```
yarn repl
```
这个命令是基于 Semo 实现的。通过这个命令，可以进入 node 的 REPL 模式，和原生 node 命令相比，这里做了扩展，比如支持使用 `await` 执行 `Promise`, 并且注入了很多开发资源，里面的 `Semo` 对象是一个常用了工具对象，里面封装了各种各样的常用包，常用函数，通过 `--hook` 可以允许项目注入新的对象到 REPL 的 Semo 对象，特别是业务项目自己封装的工具对象，例如：helpers 方法入口对象，services 方法入口对象等注入到 REPL，方便随时调试验证。

就算业务项目还没有封装任何方法，你已经可以实现下面的需求了

### 调用各个数据库的 Sequelize 模型，查询想要的数据

```
> const { Account } = await sequelize.load('db1')
> await Account.count()
```

### 调用 Redis API 查询指定的 key

```
> const redis = await redis.load('redis1')
> await redis.keys('*KEY*')
KEY
> await redis.type('KEY')
set
> await redis.smembers('KEY')
...
```
