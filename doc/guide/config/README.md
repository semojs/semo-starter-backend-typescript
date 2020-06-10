# 配置管理

## 配置 Semo

可以看到在项目初始化完成以后，根目录有一个 `Semo` 的配置文件：.semorc.json，也支持 .semorc.yml

```json
{
  "--disable-global-plugin": true,
  "--disable-home-plugin": true,

  "hook": true,
  "typescript": true,

  "commandDir": "dist/bin/semo/commands",
  "commandMakeDir": "src/bin/semo/commands",
  "cronDir": "dist/bin/semo/crons",
  "cronMakeDir": "src/bin/semo/crons",
  "pluginDir": "dist/bin/semo/plugins",
  "pluginMakeDir": "src/bin/semo/plugins",
  "extendDir": "dist/bin/semo/extends",
  "extendMakeDir": "src/bin/semo/extends",
  "scriptDir": "dist/bin/semo/scripts",
  "scriptMakeDir": "src/bin/semo/scripts",
  "hookDir": "dist/bin/semo/hooks",
  "hookMakeDir": "src/bin/semo/hooks",
  "migrationDir": "dist/migration",
  "migrationMakeDir": "src/migration",
  "modelDir": "dist/model",
  "modelMakeDir": "src/model",
  "controllerDir": "dist/controller",
  "controllerMakeDir": "src/controller"
}

```

这个配置文件是用来和 Semo 进行交互的，你可以根据 Semo 本身或者其插件的需求对其进行配置，一般来说默认的配置就够项目使用了，如果你理解了 Semo 的扩展思路和方法，你可以对这个配置的进行扩展来增强项目或者 Semo 的功能。

```
# 各项参数的作用都很好理解：
`commandDir`: 自定义的命令行工具在这个目录；使用 `semo generate command` 根据模板自动生成命令基础代码
`cronDir`: 计划任务脚本在这个目录；使用 `semo generate cron` 生成样板文件
`pluginDir`: 如果你打算渐进式的开发一个跨项目使用的 Semo 插件，需要在这个目录定义；使用 `semo generate plugin` 生成样板文件
`extendDir`: 如果你要扩展其他插件提供的 HOOK 增强其功能，需要在这个目录进行定义；使用 `semo generate command --extend` 生成样板文件
`scriptDir`: 如果有需要写业务脚本，在这个目录；使用 `semo generate script` 生成样板文件
`migrationDir：` 如果需要写数据库的 migration 文件，需要在这个目录定义；使用 `semo generate migration` 生成样板文件
`modelDir`: 如果需要写模型文件，需要在这个目录定义；使用 `semo generate model` 生成样板文件
`controllerDir`: 如果需要写模型文件，需要在这个目录定义；使用 `semo generate controller` 生成样板文件

# 覆写公共选项，影响 Semo 的运行，通常可以提升运行性能
`--disable-global-plugin`: 禁止扫描全局插件目录
`--disable-home-plugin`: 禁止扫描当前用户家目录插件目录
`--typescript`: 声明这是一个基于 Typescript 的项目，所有自动生成的代码生成的都是 ts 代码
`--hook`: 这个是覆写 repl 命令的选项，使其默认调用插件钩子，为 REPL 注入相关业务逻辑
```

其他：
1. 那些包含 Make 的目录是指向 ts 源码，而不带 Make 的放的是编译后的代码
2. 配置文件同时支持两种风格的配置方式，同时使用时命令行选项这种风格的优先级更高，但完全没有必要这样做


## 应用本地配置

也就是认为可以放进代码库的配置信息。应用配置这里我们用了 `config` 这个 npm 包来管理，项目的 config 目录里很好理解，我们在 default.js 里定义跨环境共享的配置，`development.js`，`test.js` 和 `production.js` 里配置的是各环境的个性化配置,这样就实现了配置的复用。

## 配置缓存

可以看到我们的配置不止一层，那么我们的配置最终到底是个什么样子，有时需要直观的看到，我们保存了一份备份到 `config/my.json` 里，这个文件更多的是用来查看最终配置的。
