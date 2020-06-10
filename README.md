# semo-starter-backend-typescript

本项目基于 Semo 及其相关插件，并进行了一定的扩展，结合目前 Typescript 后端开发方案进行整合，目标是使开发后端项目可以更简单。

## 特性

- 基于 Typescript，依赖装饰器语法特性，引入依赖注入机制
- 约定了 `Controller`, `Model`, `Migration`, `Helper`, `Service`, `Validation`, `Decorator`, `Middleware` 的分层架构
- 可扩展的支持常用代码自动生成，例如 `migration`, `controller`, `model`, `dts`
- Sequelize标准模型声明方式，降低上手难度
- 不需要手写维护 `Schema`，数据变更完全基于 `Migration`，模型定义字段声明在内存中自动进行
- 能够较容易的支持多数据库实例和多 `Redis` 实例
- 针对计划任务，命令行工具，批处理脚本，数据库变更等场景进行规范约束
- 代码更加精简，常用功能的解决方案都进行和抽象封装，方便复用
- 集成 `Vuepress` 和 `Apidoc`，让代码和文档同步更新
- 类似 `Egg.js` 的渐进式开发思路，业务开发过程中孵化可复用的 `semo` 插件

## 初始化

```
npm i -g @semo/cli
semo new PROJECT_NAME THIS_REPO_URL
```


## 本地环境启动

```
yarn dts # 更新全局变量声明文件 /src/global.d.ts，这个文件需要加入代码仓库，否则线上构建会失败
yarn watch # 实时 typescript 编译
yarn start # 启动后端
yarn cron # 启动计划任务
```

也可以通过 pm2 启动

```
yarn watch # 单开一个窗口，和 pm2联动，可以实现保存之后编译，然后重启 pm2
yarn start:pm2 # 启动 pm2，可以重复执行，执行后自动打开日志
yarn stop:pm2 # 停止 pm2，实际逻辑是删除了 pm2 实例
```

## 线上环境

dev 和线上环境都是基于 Docker & K8S & Gitlab CI，具体可以咨询运维同学。

## 脚手架代码生成器

```
$ semo make help

semo make <component>

Generate component sample code

命令：
  semo make command <name> [description]               Generate a command template
  semo make plugin <name>                              Generate a plugin structure
  semo make script <name>                              Generate a script file
  semo make cron <name>                                Generate a semo cron job file
  semo make migration <tableName> [fieldName]  Generate a db migration
  semo make controller <name>                          Generate a application model
  semo make dts                                        Generate global dts file
  semo make model <name>                               Generate a application model
```
