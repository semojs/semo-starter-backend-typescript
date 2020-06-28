(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{360:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"项目部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目部署"}},[s._v("#")]),s._v(" 项目部署")]),s._v(" "),a("h2",{attrs:{id:"nvmrc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nvmrc"}},[s._v("#")]),s._v(" .nvmrc")]),s._v(" "),a("p",[s._v("这里我们推荐使用 nvm 管理本地 node 多版本，.nvmrc 可以声明当前项目是在哪个版本下开发和测试的，一般与线上部署的 Dockerfile 中使用的镜像 node 版本是一致的。")]),s._v(" "),a("h3",{attrs:{id:"shell-集成的自动版本切换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shell-集成的自动版本切换"}},[s._v("#")]),s._v(" Shell 集成的自动版本切换")]),s._v(" "),a("p",[s._v("这个配置不是必须的，但是一般推荐配置一个适合自己的，可以减少一些混乱。")]),s._v(" "),a("h4",{attrs:{id:"基于-avn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于-avn"}},[s._v("#")]),s._v(" 基于 avn")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),a("p",[s._v("注意：avn 识别的不是 "),a("code",[s._v(".nvmrc")]),s._v(" 而是 "),a("code",[s._v(".node-version")]),s._v("，如果选择这种自动切换方式，还需要在根目录下添加一个 "),a("code",[s._v(".node-version")]),s._v(" 文件。")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g avn avn-nvm avn-n\navn setup\n")])])]),a("h4",{attrs:{id:"基于-bash，在-home-bashrc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于-bash，在-home-bashrc"}},[s._v("#")]),s._v(" 基于 bash，在 "),a("code",[s._v("$HOME/.bashrc")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("find-"),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("up")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$path")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$path")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("*}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$path")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("cdnvm")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$@")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("nvm_path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("find-up .nvmrc "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tr")]),s._v(" -d "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[:space:]'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# If there are no .nvmrc file, use the default nvm version")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$nvm_path")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" *"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("^"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(":space:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("* "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("declare")]),s._v(" default_version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("default_version")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("nvm version default"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# If there is no default version, set it to `node`")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# This will use the latest version on your machine")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$default_version")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"N/A"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n            nvm "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" default node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("default_version")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("nvm version default"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# If the current version is not the default version, set it to use the default version")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("nvm current"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$default_version")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n            nvm use default"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("elif")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -s "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$nvm_path")]),s._v("/.nvmrc "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" -r "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$nvm_path")]),s._v("/.nvmrc "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("declare")]),s._v(" nvm_version\n        "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("nvm_version")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$nvm_path")]),s._v('"')]),s._v("/.nvmrc"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("declare")]),s._v(" locally_resolved_nvm_version\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# `nvm ls` will check all locally-available versions")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# If there are multiple matching versions, take the latest one")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Remove the `->` and `*` characters and spaces")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# `locally_resolved_nvm_version` will be `N/A` if no local versions are found")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("locally_resolved_nvm_version")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("nvm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" --no-colors "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./.nvmrc"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" -1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tr")]),s._v(" -d "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\->*'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tr")]),s._v(" -d "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[:space:]'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# If it is not already installed, install it")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# `nvm install` will implicitly use the newly-installed version")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$locally_resolved_nvm_version")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"N/A"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n            nvm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$nvm_version")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("elif")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("nvm current"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$locally_resolved_nvm_version")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n            nvm use "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$nvm_version")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("cd")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cdnvm'")]),s._v("\n")])])]),a("h4",{attrs:{id:"基于-zsh，在-home-zshrc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于-zsh，在-home-zshrc"}},[s._v("#")]),s._v(" 基于 zsh，在 "),a("code",[s._v("$HOME/.zshrc")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# place this after nvm initialization!")]),s._v("\nautoload -U add-zsh-hook\nload-"),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("nvmrc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("node_version")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("nvm version"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("nvmrc_path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("nvm_find_nvmrc"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$nvmrc_path")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("nvmrc_node_version")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("nvm version "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${nvmrc_path}")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$nvmrc_node_version")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"N/A"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n      nvm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("elif")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$nvmrc_node_version")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$node_version")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n      nvm use\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("elif")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$node_version")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("nvm version default"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Reverting to nvm default version"')]),s._v("\n    nvm use default\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nadd-zsh-hook chpwd load-nvmrc\nload-nvmrc\n")])])]),a("h2",{attrs:{id:"本地环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地环境"}},[s._v("#")]),s._v(" 本地环境")]),s._v(" "),a("p",[s._v("可以看到，在 package.json 里，我们定义了一个 scripts 项：")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"start"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"DEBUG=application NODE_ENV=development ts-node-dev src/index.ts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"start:dist"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"DEBUG=application NODE_ENV=development node dist/index.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"start:pm2"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"DEBUG=application NODE_ENV=development npm run build && pm2 startOrRestart deploy/development/pm2.yml && pm2 logs application"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"stop:pm2"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pm2 delete all"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"watch"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tsc -w"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("这里定义了几个不同的启动项目的命令，"),a("code",[s._v("yarn start")]),s._v(" 只是作为简单的演示的时候使用，真正开发时推荐使用 "),a("code",[s._v("yarn start:pm2")]),s._v(" 这样可以获得更好的稳定性和文件变更自动刷新的能力，这个命令是个复合命令，每次都会重新构建，重新启动，并进入到 log 监控模式"),a("code",[s._v("，")]),s._v("yarn stop:pm2` 用来停止 pm2 所有的实例。")]),s._v(" "),a("p",[s._v("这些命令一方面可以手动执行，另一方面，在 "),a("code",[s._v("VSCode")]),s._v(" 里触发也是很方便的。")]),s._v(" "),a("h2",{attrs:{id:"线上部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线上部署"}},[s._v("#")]),s._v(" 线上部署")]),s._v(" "),a("p",[s._v("我们部署线上环境是要考虑多种情况，比如测试环境，仿真环境，线上环境。这里我们用途不同，配置上是略有不同的，但是部署方式都是一样的，都是通过 CICD 来触发，通过 Dockerfile 来调用 pm2启动服务，并且最终托管在 "),a("code",[s._v("K8s")]),s._v(" 环境。")]),s._v(" "),a("h3",{attrs:{id:"为什么要使用-pm2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用-pm2"}},[s._v("#")]),s._v(" 为什么要使用 pm2")]),s._v(" "),a("p",[s._v("一般我们的测试环境和线上环境都是 "),a("code",[s._v("K8s")]),s._v(" 部署的，其有很好的高可用特性，但是一旦发生问题，由于有 pod 的销毁和重建，中间可能会有闪断，尤其是很多服务我们并没有在线上或者 dev 部署多 pod 实例。通过 pm2，我们可以做到容器内部仅仅依靠 pm2 就能在容器内实现崩溃自动重启，相当于应用重启，但是容器不需要重建。")]),s._v(" "),a("p",[s._v("另一个使用 pm2 的原因是 pm2 支持在一个容器里起多个进程，这里我们用到的是两个，一个负责提供接口服务，一个用于提供计划任务。实际业务可以充分利用 pm2 提供的灵活性。")]),s._v(" "),a("h3",{attrs:{id:"pm2-的配置文件解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pm2-的配置文件解析"}},[s._v("#")]),s._v(" pm2 的配置文件解析")]),s._v(" "),a("p",[s._v("以线上环境的 "),a("code",[s._v("pm2.yml")]),s._v(" 配置文件为例：")]),s._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ./index.js\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" application\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("exec_mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" fork\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("watch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ignore_watch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'node_modules'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.git'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'config/my.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("NODE_ENV")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" production\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("DEBUG")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" application"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("semo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("*\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("DEBUG_HIDE_DATE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("DEBUG_COLORS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("DEBUG_DEPTH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" npm\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("args")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'run cron'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" cron\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("exec_mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" fork\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("watch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ignore_watch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'node_modules'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.git'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'config/my.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("NODE_ENV")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" production\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("DEBUG")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" semo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("*\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("DEBUG_HIDE_DATE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("DEBUG_COLORS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("DEBUG_DEPTH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])])]),a("p",[s._v("这里我们定义了两个进程，一个跑接口服务，一个跑计划任务，注意计划任务这里我们是怎么定义脚本和参数的。由于开启了 "),a("code",[s._v("pm2")]),s._v(" 的 watch 机制，所以，我们可以实现在容器中修改自动生效，方便线上调试。"),a("code",[s._v("exec_mode")]),s._v(" 这里用的是 "),a("code",[s._v("fork")]),s._v("，如果需要也可以考虑 "),a("code",[s._v("cluster")]),s._v("，但是这里一般更推荐使用 "),a("code",[s._v("K8s")]),s._v(" 的多实例来代替 "),a("code",[s._v("pm2")]),s._v(" 的 "),a("code",[s._v("cluster")]),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"dockerfile-解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile-解析"}},[s._v("#")]),s._v(" Dockerfile 解析")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('FROM node:12.13.0\n\nCMD ["pm2-docker", "deploy/env/production/pm2.yml"]\n')])])]),a("p",[a("code",[s._v("pm2-docker")]),s._v(" 是 pm2 内置的专门针对在容器中使用的一个命令。其他 Dockerfile 很好理解，这里就不过多解释。需要注意的是我们不推荐 yarn 和 npm 混用，这里都推荐使用 yarn。")])])}),[],!1,null,null,null);t.default=e.exports}}]);