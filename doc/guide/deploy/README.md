# 项目部署

## .nvmrc

这里我们推荐使用 nvm 管理本地 node 多版本，.nvmrc 可以声明当前项目是在哪个版本下开发和测试的，一般与线上部署的 Dockerfile 中使用的镜像 node 版本是一致的。

### Shell 集成的自动版本切换

这个配置不是必须的，但是一般推荐配置一个适合自己的，可以减少一些混乱。

#### 基于 avn

::: warning
注意：avn 识别的不是 `.nvmrc` 而是 `.node-version`，如果选择这种自动切换方式，还需要在根目录下添加一个 `.node-version` 文件。
:::

```bash
npm install -g avn avn-nvm avn-n
avn setup
```

#### 基于 bash，在 `$HOME/.bashrc`

```bash
find-up () {
    path=$(pwd)
    while [[ "$path" != "" && ! -e "$path/$1" ]]; do
        path=${path%/*}
    done
    echo "$path"
}

cdnvm(){
    cd "$@";
    nvm_path=$(find-up .nvmrc | tr -d '[:space:]')

    # If there are no .nvmrc file, use the default nvm version
    if [[ ! $nvm_path = *[^[:space:]]* ]]; then

        declare default_version;
        default_version=$(nvm version default);

        # If there is no default version, set it to `node`
        # This will use the latest version on your machine
        if [[ $default_version == "N/A" ]]; then
            nvm alias default node;
            default_version=$(nvm version default);
        fi

        # If the current version is not the default version, set it to use the default version
        if [[ $(nvm current) != "$default_version" ]]; then
            nvm use default;
        fi

        elif [[ -s $nvm_path/.nvmrc && -r $nvm_path/.nvmrc ]]; then
        declare nvm_version
        nvm_version=$(<"$nvm_path"/.nvmrc)

        declare locally_resolved_nvm_version
        # `nvm ls` will check all locally-available versions
        # If there are multiple matching versions, take the latest one
        # Remove the `->` and `*` characters and spaces
        # `locally_resolved_nvm_version` will be `N/A` if no local versions are found
        locally_resolved_nvm_version=$(nvm ls --no-colors $(<"./.nvmrc") | tail -1 | tr -d '\->*' | tr -d '[:space:]')

        # If it is not already installed, install it
        # `nvm install` will implicitly use the newly-installed version
        if [[ "$locally_resolved_nvm_version" == "N/A" ]]; then
            nvm install "$nvm_version";
        elif [[ $(nvm current) != "$locally_resolved_nvm_version" ]]; then
            nvm use "$nvm_version";
        fi
    fi
}
alias cd='cdnvm'
```

#### 基于 zsh，在 `$HOME/.zshrc`:

```bash
# place this after nvm initialization!
autoload -U add-zsh-hook
load-nvmrc() {
  local node_version="$(nvm version)"
  local nvmrc_path="$(nvm_find_nvmrc)"

  if [ -n "$nvmrc_path" ]; then
    local nvmrc_node_version=$(nvm version "$(cat "${nvmrc_path}")")

    if [ "$nvmrc_node_version" = "N/A" ]; then
      nvm install
    elif [ "$nvmrc_node_version" != "$node_version" ]; then
      nvm use
    fi
  elif [ "$node_version" != "$(nvm version default)" ]; then
    echo "Reverting to nvm default version"
    nvm use default
  fi
}
add-zsh-hook chpwd load-nvmrc
load-nvmrc
```

## 本地环境

可以看到，在 package.json 里，我们定义了一个 scripts 项：

```json
 "scripts": {
    "start": "DEBUG=application NODE_ENV=development ts-node-dev src/index.ts",
    "start:dist": "DEBUG=application NODE_ENV=development node dist/index.js",
    "start:pm2": "DEBUG=application NODE_ENV=development npm run build && pm2 startOrRestart deploy/development/pm2.yml && pm2 logs application",
    "stop:pm2": "pm2 delete all",
    "watch": "tsc -w",
 }
```

这里定义了几个不同的启动项目的命令，`yarn start` 只是作为简单的演示的时候使用，真正开发时推荐使用 `yarn start:pm2` 这样可以获得更好的稳定性和文件变更自动刷新的能力，这个命令是个复合命令，每次都会重新构建，重新启动，并进入到 log 监控模式`，`yarn stop:pm2` 用来停止 pm2 所有的实例。

这些命令一方面可以手动执行，另一方面，在 `VSCode` 里触发也是很方便的。

## 线上部署

我们部署线上环境是要考虑多种情况，比如测试环境，仿真环境，线上环境。这里我们用途不同，配置上是略有不同的，但是部署方式都是一样的，都是通过 CICD 来触发，通过 Dockerfile 来调用 pm2启动服务，并且最终托管在 `K8s` 环境。

### 为什么要使用 pm2

一般我们的测试环境和线上环境都是 `K8s` 部署的，其有很好的高可用特性，但是一旦发生问题，由于有 pod 的销毁和重建，中间可能会有闪断，尤其是很多服务我们并没有在线上或者 dev 部署多 pod 实例。通过 pm2，我们可以做到容器内部仅仅依靠 pm2 就能在容器内实现崩溃自动重启，相当于应用重启，但是容器不需要重建。

另一个使用 pm2 的原因是 pm2 支持在一个容器里起多个进程，这里我们用到的是两个，一个负责提供接口服务，一个用于提供计划任务。实际业务可以充分利用 pm2 提供的灵活性。

### pm2 的配置文件解析

以线上环境的 `pm2.yml` 配置文件为例：

```yaml
apps:
  - script: ./index.js
    name: application
    exec_mode: fork
    watch: true
    ignore_watch: ['node_modules', '.git', 'config/my.json']
    env:
      NODE_ENV: production
      port: 8080
      DEBUG: application,semo-*
      DEBUG_HIDE_DATE: true
      DEBUG_COLORS: true
      DEBUG_DEPTH: 2
  - script: npm
    args: 'run cron'
    name: cron
    exec_mode: fork
    watch: true
    ignore_watch: ['node_modules', '.git', 'config/my.json']
    env:
      NODE_ENV: production
      DEBUG: semo-*
      DEBUG_HIDE_DATE: true
      DEBUG_COLORS: true
      DEBUG_DEPTH: 2
```

这里我们定义了两个进程，一个跑接口服务，一个跑计划任务，注意计划任务这里我们是怎么定义脚本和参数的。由于开启了 `pm2` 的 watch 机制，所以，我们可以实现在容器中修改自动生效，方便线上调试。`exec_mode` 这里用的是 `fork`，如果需要也可以考虑 `cluster`，但是这里一般更推荐使用 `K8s` 的多实例来代替 `pm2` 的 `cluster`。

### Dockerfile 解析

```
FROM node:12.13.0

CMD ["pm2-docker", "deploy/env/production/pm2.yml"]
```

`pm2-docker` 是 pm2 内置的专门针对在容器中使用的一个命令。其他 Dockerfile 很好理解，这里就不过多解释。需要注意的是我们不推荐 yarn 和 npm 混用，这里都推荐使用 yarn。
