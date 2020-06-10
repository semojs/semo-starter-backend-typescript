(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{366:function(s,t,a){"use strict";a.r(t);var e=a(43),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"计划任务管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#计划任务管理"}},[s._v("#")]),s._v(" 计划任务管理")]),s._v(" "),a("h2",{attrs:{id:"为什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么"}},[s._v("#")]),s._v(" 为什么")]),s._v(" "),a("p",[s._v("很多项目都有计划任务的需求，当然也有很多 npm 包能够提供定时触发的功能，再不济我们还可以用 "),a("code",[s._v("setInternal")]),s._v(" 方法进行定时。但是这里面有几个问题不是很好解决")]),s._v(" "),a("ol",[a("li",[s._v("把定时任务和接口服务写在一个进程里，万一计划任务异常影响到接口服务稳定性怎么办？")]),s._v(" "),a("li",[s._v("如果我的定时任务只是定时触发一个 shell 脚本怎么办？")]),s._v(" "),a("li",[s._v("如果我线上是多实例部署，怎么保证计划任务执行的唯一性？")])]),s._v(" "),a("p",[s._v("当然，这些问题都能够找到解决方法，但是每个项目可能都要重复遇到，而且对于微服务的架构，服务众多，这种重复投入是一种浪费。")]),s._v(" "),a("p",[s._v("目前脚手架内置了 "),a("code",[s._v("semo-plugin-cron")]),s._v(" 的计划任务机制，能够解决上面的3个问题。")]),s._v(" "),a("ol",[a("li",[s._v("计划任务和接口服务在不同的进程里，相互影响较小。")]),s._v(" "),a("li",[s._v("计划任务的写法支持Shell 命令的形式")]),s._v(" "),a("li",[s._v("通过 Redis 锁机制，解决多实例部署时计划任务之间互相干扰")])]),s._v(" "),a("p",[s._v("另外，还有一些别的"),a("strong",[s._v("特性")]),s._v("：")]),s._v(" "),a("ol",[a("li",[s._v("实现了简单的计划任务管理，每个计划任务一个文件，思路和管理脚本，命令，数据库迁移文件类似。")]),s._v(" "),a("li",[s._v("计划任务可以临时禁用")]),s._v(" "),a("li",[s._v("计划任务可以指定生效的环境")]),s._v(" "),a("li",[s._v("一个计划任务可以定义多个动作，依次调用")])]),s._v(" "),a("h2",{attrs:{id:"使用脚手架新建计划任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用脚手架新建计划任务"}},[s._v("#")]),s._v(" 使用脚手架新建计划任务")]),s._v(" "),a("p",[s._v("脚手架提供了自动生成计划任务样板代码的功能，如下：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" semo-plugin-cron\nsemo generate "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cron")]),s._v(" demo\n./bin/semo/crons/20190426112934195_demo.js created"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n")])])]),a("p",[s._v("生成的计划任务在指定目录，文件名有统一的规律，类似于脚本和数据库迁移文件。生成的代码类似如下：")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("sleep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("ms")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("resolve")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 示例 Job Actions")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("demoAction")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("demo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'I am a test cron job action'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" schedule "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*/5 * * * * *'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" duration "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4999")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 为了避免临界条件，锁定时间要小于计划执行周期，大于任务实际执行时间")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" actions "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("demoAction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'date'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'+%Y-%m-%dT%H:%M:%S'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" disabled "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 做为测试任务，正常情况下是禁用的")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" env "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'production'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指定运行环境，如果不指定则在所有环境都可以触发")]),s._v("\n\n")])])]),a("p",[s._v("示例代码想传递几个信息，一个是大致的计划任务怎么写，另外，就是关于时间，这里有三个时间")]),s._v(" "),a("ol",[a("li",[s._v("计划任务本身的执行时间，这里通过 "),a("code",[s._v("sleep")]),s._v(" 函数模拟")]),s._v(" "),a("li",[s._v("计划任务的执行周期")]),s._v(" "),a("li",[a("code",[s._v("duration")]),s._v(" 代表加锁的时间")])]),s._v(" "),a("p",[s._v("一般来说，这个需要开发计划任务的工程师自己来评估，大致要满足： "),a("code",[s._v("计划任务执行周期 > 加锁周期 > 任务的执行时间")]),s._v("，如果不满足，可能会发生几种现象")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("加锁周期 > 计划任务周期")]),s._v("，下次触发还在锁定当中，相当于计划任务周期延长了。")]),s._v(" "),a("li",[a("code",[s._v("任务执行时间 > 加锁周期")]),s._v("，这种比较危险，因为任务没有执行完，已经没有锁了，这时一定不要再触发计划任务。如果计划任务的执行周期设置的不是很短，主要是考虑多实例的情况，只要不同的实例的时钟差别没有那么大，理论上也不会出现重复触发的情况。")]),s._v(" "),a("li",[a("code",[s._v("任务执行时间 > 计划任务周期")]),s._v("，这种应该避免，因为任务的性质不同，如果每个人涉及到一取一存，由于没有执行到存储环节，可能导致下次取出现异常。但是如果是消费队列，就不会有太大的影响，这里一般都是具体问题具体分析。")])]),s._v(" "),a("p",[a("code",[s._v("actions")]),s._v(" 支持设置一个 "),a("code",[s._v("Promise")]),s._v(" 函数作为计划任务，也支持一个 Shell 命令，Shell 命令的写法支持两种，推荐用数组这种，如果用字符串，在切割解析的时候可以会出错（原因主要是引号的干扰）。")]),s._v(" "),a("p",[s._v("::tip\n注意，这里加锁机制在进行跨项目的隔离是用的是项目根目录的 package.json 里的 name，也就是两个项目如果 package.json 的 name 是相同的，比如都基于本脚手架起项目，但是没有改名字，如果恰好两个项目的计划任务的 key 又是相同的，可能会导致锁的相互干扰，为了避免这种干扰一方面是注意项目名的唯一性，另一方面是尽量使用 "),a("code",[s._v("semo make cron")]),s._v(" 生成样板代码，会有随机的计划任务文件名，如果是自定义文件名，会增大和其他相互冲突干扰的几率。\n::")]),s._v(" "),a("h2",{attrs:{id:"计划任务的定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#计划任务的定义"}},[s._v("#")]),s._v(" 计划任务的定义")]),s._v(" "),a("p",[s._v("每个计划任务都是一个普通的 node 模块，需要返回一个对象，对象包含4个属性")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("schedule: 基于 `node_cron` 包实现的，可以参考其文档进行设置，这里支持最小秒级触发，例如： '* * * * * *'\nduration: 锁定时间，内部基于 Redis 锁，Redis 基于公司的底层 Redis 服务，自动连接，并且不依赖业务项目。\nactions: 计划任务，是一个数组，每一项可以是一个 `Promise` 函数，也可以是代表 shell 命令的字符串或数组。\ndisabled: 是否禁用这个计划任务。\nenv: 指定计划任务的运行环境，如果不指定则在所有环境都可以出发，例如：`env: 'production'`\n")])])]),a("h2",{attrs:{id:"单独执行一个计划任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单独执行一个计划任务"}},[s._v("#")]),s._v(" 单独执行一个计划任务")]),s._v(" "),a("p",[s._v("多用于开发和调试，不使用计划任务周期触发，而是通过命令来触发，以上面新建的计划任务为例，只需要执行下面的命令，就触发单个计划任务")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("semo cron bin/semo/crons/20190426112934195_demo.js\n")])])]),a("h2",{attrs:{id:"内置-test-计划任务的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内置-test-计划任务的作用"}},[s._v("#")]),s._v(" 内置 test 计划任务的作用")]),s._v(" "),a("p",[s._v("首先当然还是提示大家一个计划任务长什么样子，另外，其默认是禁用状态，当首次启动时，可以开启，验证计划任务是否正常工作。")]),s._v(" "),a("h2",{attrs:{id:"不需要计划任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不需要计划任务"}},[s._v("#")]),s._v(" 不需要计划任务")]),s._v(" "),a("p",[s._v("不是所有的服务都需要计划任务，当你不需要时，可以修改部署流程的 pm2.yml，把启动计划任务的代码先删掉或者注释掉。")]),s._v(" "),a("h2",{attrs:{id:"其他计划任务方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他计划任务方案"}},[s._v("#")]),s._v(" 其他计划任务方案")]),s._v(" "),a("p",[s._v("计划任务有很多种实现方案，例如系统的 crontab，k8s 也有计划任务机制，更复杂的，有分布式的任务调度系统等等，所以这里并不强制大家必须使用这种方案，只是当大家要自己写代码实现计划任务时参考一下这种方案。")])])}),[],!1,null,null,null);t.default=n.exports}}]);