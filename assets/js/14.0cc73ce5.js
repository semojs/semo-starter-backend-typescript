(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{360:function(v,e,_){"use strict";_.r(e);var o=_(43),c=Object(o.a)({},(function(){var v=this,e=v.$createElement,_=v._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"目录结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[v._v("#")]),v._v(" 目录结构")]),v._v(" "),_("p",[v._v("这里对项目的目录结构做一些基本的约定，业务项目在继续开发时可以选择打破这些规范，这里的目的只是为了给大家一个初始规范，进一步的升级或者变更需要业务项目组内部约定好。")]),v._v(" "),_("p",[v._v("这个 Starter 极大的整合了 "),_("code",[v._v("Routing Controllers")]),v._v(" 项目，所以一些分层都是遵守这个项目的原则的。")]),v._v(" "),_("h2",{attrs:{id:"主要目录及文件说明"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#主要目录及文件说明"}},[v._v("#")]),v._v(" 主要目录及文件说明")]),v._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[v._v("TIP")]),v._v(" "),_("p",[v._v("这里我们倾向于单数形式的目录名，对于目录命名，我们认为单数和复数都可以，但是最好不要混用。")])]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("├── config\n├── config.db.js\n├── deploy\n├── package.json\n└── src\n  ├── bin\n  ├── controller\n  ├── create-app.ts\n  ├── decorator\n  ├── exception\n  ├── func.ts\n  ├── global.d.ts\n  ├── helper\n  ├── index.ts\n  ├── init\n  ├── middleware\n  ├── migration\n  ├── model\n  ├── service\n  └── validation\n")])])]),_("p",[v._v("上面将一些次要目录或文件去掉了，可以看的清楚一些，相关目录或文件的用途如下：")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("config")]),v._v(": 基于 "),_("code",[v._v("config")]),v._v(" npm 包，保存了项目级的配置，非敏感信息，公共配置存放到 "),_("code",[v._v("config/default.js")]),v._v("，各环境特殊配置分别有自己的配置文件。")]),v._v(" "),_("li",[_("code",[v._v("config.db.js")]),v._v(": 是为 "),_("code",[v._v("sequelize-cli")]),v._v(" 的 "),_("code",[v._v(".sequelizerc")]),v._v(" 提供数据库连接信息的配置文件，一般无需修改。")]),v._v(" "),_("li",[_("code",[v._v("deploy")]),v._v(": 这个目录和部署相关，我们测试环境和线上环境都基于 "),_("code",[v._v("k8s")]),v._v("，容器内部都基于 "),_("code",[v._v("pm2")]),v._v("。")]),v._v(" "),_("li",[_("code",[v._v("src/bin")]),v._v(": 用于放置一些命令脚本，"),_("code",[v._v("Semo")]),v._v(" 命令行相关扩展都放在 "),_("code",[v._v("src/bin/semo")]),v._v("，但是业务项目也可能需要其他形式的命令脚本。")]),v._v(" "),_("li",[_("code",[v._v("src/controller")]),v._v(": 后端 MVC 分层中的 Controller 层，和路由关联。")]),v._v(" "),_("li",[_("code",[v._v("src/create-app.ts")]),v._v(": 初始化 "),_("code",[v._v("koa")]),v._v("，加入各种中间件。")]),v._v(" "),_("li",[_("code",[v._v("src/decorator")]),v._v(": 自定义装饰器。")]),v._v(" "),_("li",[_("code",[v._v("src/exception")]),v._v(": 异常相关，目前用于定义异常类型，错误码等")]),v._v(" "),_("li",[_("code",[v._v("src/func.ts")]),v._v(": 工具函数")]),v._v(" "),_("li",[_("code",[v._v("src/global.d.ts")]),v._v(": 全局变量声明文件，为了兼容全局变量，能够自动生成，业务项目需要将其加入到代码仓库，里面有自动生成的模型类型声明。")]),v._v(" "),_("li",[_("code",[v._v("src/helper")]),v._v(": 在 "),_("code",[v._v("Controller")]),v._v(" 和 "),_("code",[v._v("Model")]),v._v(" 中间，需要加一个 "),_("code",[v._v("Helper")]),v._v(" 层，用于封装复杂一些的业务逻辑，被 "),_("code",[v._v("Controller")]),v._v(" 调用。")]),v._v(" "),_("li",[_("code",[v._v("src/index.ts")]),v._v(": 入口启动文件")]),v._v(" "),_("li",[_("code",[v._v("src/init")]),v._v(": 初始化阶段，简单的初始化放在 "),_("code",[v._v("src/init/index.ts")]),v._v(" 里，复杂的初始化逻辑要在独立的文件里进行。")]),v._v(" "),_("li",[_("code",[v._v("src/middleware")]),v._v(": 项目中间件，"),_("code",[v._v("src/middleware/global")]),v._v(" 是全局中间件，其他是按需调用的。")]),v._v(" "),_("li",[_("code",[v._v("src/migration")]),v._v(": 记录数据库的每一次变更，由于没有 "),_("code",[v._v("Schema")]),v._v(" 层，每一次数据库变更都需要通过 "),_("code",[v._v("Migration")]),v._v(" 机制。")]),v._v(" "),_("li",[_("code",[v._v("src/model")]),v._v(": 模型目录，每个模型一个文件，可以在里面定义模型方法，模型实例方法，虚拟模型变量，模型关系，以及为了更好的类型提示，对字段进行 "),_("code",[v._v("ts")]),v._v(" 类型声明。")]),v._v(" "),_("li",[_("code",[v._v("src/service")]),v._v(": 这里建议放的是业务对第三方资源的封装，可能是其他微服务，可能是外部接口，也可能是远程连库。")]),v._v(" "),_("li",[_("code",[v._v("src/validation")]),v._v(": 这里是为接口参数提供的校验机制，将校验从控制器中剥离可以让控制器更加简洁。")]),v._v(" "),_("li",[_("code",[v._v("src/test")]),v._v(": 放的是单元测试脚本，【暂时缺失】")])]),v._v(" "),_("h2",{attrs:{id:"一些约定"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一些约定"}},[v._v("#")]),v._v(" 一些约定")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("Controller")]),v._v(" 只对 "),_("code",[v._v("Router")]),v._v(" 负责，不要相互调用，也不要被其他层调用。")]),v._v(" "),_("li",[v._v("尽量不要在 "),_("code",[v._v("Controller")]),v._v(" 直接调用 "),_("code",[v._v("Model")]),v._v("，只调用 "),_("code",[v._v("Helper")]),v._v(" 或 "),_("code",[v._v("Service")]),v._v("。")]),v._v(" "),_("li",[v._v("Service 封装第三方资源，可以调用 Helper 也可以调用 Model。")]),v._v(" "),_("li",[v._v("数据库一般一个项目只连一个进行读写，但是一些稍微复杂的项目，可能会同时连接多个库，我们一般不推荐一个项目同时写多个库，读的话还可以接受。")]),v._v(" "),_("li",[v._v("这里没有内置异常捕获（比如 Sentry)，配置管理 （比如  Consul)，需要大家基于实际的平台架构来扩展。")])])])}),[],!1,null,null,null);e.default=c.exports}}]);