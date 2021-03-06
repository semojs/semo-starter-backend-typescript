# 介绍

**Semo-Backend-Starter**(后面简称 Starter)，是一个后端项目开发的模版代码，配合 Semo 提供的各种开发工具和 MVC 的架构，最终形成一个后端项目开发的脚手架。

本脚手架基于 node v12 开发，后面会继续根据新版本的 node 和各种依赖包的新特性进行优化，如果您的生产环境 Node 版本过低，建议考虑升级，或者尝试在低版本 Node 环境运行本项目。

## 主要特性

- 基于 Typescript，依赖装饰器语法特性，引入依赖注入机制
- 约定了 `Controller`, `Model`, `Migration`, `Helper`, `Service`, `Validation`, `Decorator`, `Middleware` 的分层架构
- 可扩展的支持常用代码自动生成，例如 `migration`, `controller`, `model`, `dts`
- Sequelize标准模型声明方式，降低上手难度
- 不需要手写维护 `Schema`，数据变更完全基于 `Migration`，模型定义字段声明在内存中自动进行
- 能够较容易的支持多数据库实例和多 `Redis` 实例
- 针对计划任务，命令行工具，批处理脚本，数据库变更等场景进行规范约束
- 代码更加精简，常用功能的解决方案都进行和抽象封装，方便复用
- 集成 `Vuepress` 和 `Apidoc`，让代码和文档同步更新
- 类似 `Egg.js` 的渐进式开发思路，业务开发过程中孵化可复用的 `Semo` 插件

## 为什么要再造一个轮子

市面上有很多 Node 脚手架了，但是还是有很多公司和个人喜欢自己组装项目架构，这个过程还是非常浪费时间的，这里希望这个项目能给大家一个参考，如果大家认同项目的大部分设置，那么可以基于这个项目进一步修改。本项目的理念是，复杂性通过插件和配置隔离和开关，推崇约定大于配置。

## 业务项目怎么写自己的文档

本文档是关于框架怎么使用的说明文档，其本身也是希望帮助业务项目快速建立起文档基础设施（包括基于 apidoc 的 API 文档基础设施），让业务项目可以根据业务实际情况完善业务文档的部分，CICD 已经都配置好了，略加修改就可以拿去使用。

由于业务项目的维护者不一定知道或者能看到脚手架项目，所以不建议业务项目完全删除脚手架的说明文档，而是应该把业务项目根据实际情况增加的部分（业务设计或者框架底层的升级改造），以很好的结构化合并进这个文档，使得项目在长期的维护过程中，经验不断积累。然后这个 Starter 项目可以结合大家的文档和代码不断完善自身，形成良性循环。
