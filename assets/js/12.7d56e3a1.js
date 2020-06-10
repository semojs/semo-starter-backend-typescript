(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{358:function(t,a,s){"use strict";s.r(a);var n=s(43),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"数据库和模型管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库和模型管理"}},[t._v("#")]),t._v(" 数据库和模型管理")]),t._v(" "),s("p",[t._v("首先可以看到，数据库的链接是通过 Semo 及其插件提供的，整个脚手架自己不需要考虑如何连接的问题。其次，这里同时支持连单个以及多个数据库的逻辑，db 和 Op 会被写入全局变量。")]),t._v(" "),s("p",[t._v("在实际实现业务逻辑的时候，有多种方式去访问模型和数据库。")]),t._v(" "),s("h2",{attrs:{id:"获取-db-数据库实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取-db-数据库实例"}},[t._v("#")]),t._v(" 获取 "),s("code",[t._v("db")]),t._v(" 数据库实例")]),t._v(" "),s("h3",{attrs:{id:"脚手架初始化的数据库实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#脚手架初始化的数据库实例"}},[t._v("#")]),t._v(" 脚手架初始化的数据库实例")]),t._v(" "),s("p",[t._v("使用全局变量 "),s("code",[t._v("db.models")]),t._v(" 来访问数据模型很方便，我们在 helper 层定义一些需要访问数据库的方法时可以使用这种方式，获得的模型就是 Sequelize 的模型实例，因此具体用法可以参考"),s("a",{attrs:{href:"http://docs.sequelizejs.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),s("OutboundLink")],1),t._v("：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Project "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("models "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// db 是全局已经初始化好的数据库实例对象")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" results "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Project"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findAll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"直接使用-semo-提供的-hook-机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#直接使用-semo-提供的-hook-机制"}},[t._v("#")]),t._v(" 直接使用 Semo 提供的 hook 机制")]),t._v(" "),s("p",[t._v("使用这种方式甚至不需要在初始化的时候考虑数据库，用的时候直接调用即可，一般我们推荐在命令行工具，脚本中使用这种方式。另外，整个底层环境中有多个数据库，有的后端项目是需要跨库写逻辑的，这时也可以使用这种方式。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" sequelize "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Utils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("invokeHook")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'component'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" models"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Account"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Profile "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" sequelize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("load")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myDb'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" account "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Account"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findOne")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    attributes"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    raw"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    include"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      model"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Profile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      attributes"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    where"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bob'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  Utils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("account"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[s("code",[t._v("db.load")]),t._v(" 方法有两个配置项：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  modelKey"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果一个项目连接多个数据库，模型文件需要基于 modelDir 分多个目录存放")]),t._v("\n  raw"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 全局默认f返回值为 JSON 格式")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"连接多个数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#连接多个数据库"}},[t._v("#")]),t._v(" 连接多个数据库")]),t._v(" "),s("p",[t._v("默认脚手架提供的代码以及示例都是假设项目连接的是单一数据库，但是有时我们的业务项目是需要连接多个数据库来提供服务的，比如一些数据分析处理相关的业务，这时我们在配置数据库时就要声明多个数据库的连接。")]),t._v(" "),s("p",[t._v("这里主要是指 "),s("code",[t._v("config/default.js")]),t._v(", 之前我们的配置是：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\ndb"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'db1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),s("p",[t._v("使用时大致如下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Account "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("models\n")])])]),s("p",[t._v("使用了多库之后，配置文件我们改成:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\ndb"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  db1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'db1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  db2"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'db2'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),s("p",[t._v("使用时大致如下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Account "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("db1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("models\n")])])]),s("h2",{attrs:{id:"数据库变更管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库变更管理"}},[t._v("#")]),t._v(" 数据库变更管理")]),t._v(" "),s("p",[s("code",[t._v("migration")]),t._v("文件做为本脚手架唯一接受的数据库变更方式必须得到重视，我们不推荐一切非 "),s("code",[t._v("migration")]),t._v(" 的数据库变更方式，包括但不限于自己写脚本，手动执行 SQL等等。在 "),s("code",[t._v("migration")]),t._v(" 文件的 "),s("code",[t._v("up/down")]),t._v(" 方法里，我们推荐使用 "),s("code",[t._v("Sequelize")]),t._v(" ORM 方式操作数据库。")]),t._v(" "),s("h3",{attrs:{id:"migration-文件长什么样子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#migration-文件长什么样子"}},[t._v("#")]),t._v(" "),s("code",[t._v("migration")]),t._v(" 文件长什么样子")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'use strict'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("up")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("queryInterface"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Sequelize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("down")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("queryInterface"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Sequelize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("当我们执行 "),s("code",[t._v("yarn sequelize db:migrate")]),t._v(" 时会触发 "),s("code",[t._v("up")]),t._v(" 函数的脚本，当我们执行 "),s("code",[t._v("yarn sequelize db:migrate:undo")]),t._v(" 或者 "),s("code",[t._v("yarn sequelize db:migrate:undo:all")]),t._v(" 时会触发 "),s("code",[t._v("down")]),t._v(" 函数的逻辑。更多 "),s("code",[t._v("sequelize-cli")]),t._v(" 命令的信息可以执行 "),s("code",[t._v("yarn sequelize help")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"migration-文件怎么创建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#migration-文件怎么创建"}},[t._v("#")]),t._v(" "),s("code",[t._v("migration")]),t._v(" 文件怎么创建")]),t._v(" "),s("p",[t._v("我们当然可以使用手动的方式，但是这样一来，每次都需要重复输入这些样板代码，略显麻烦。另一种方式是使用 "),s("code",[t._v("yarn sequelize migration:generate")]),t._v(" 的方式，这里也是支持的，但是我们只能得到一个空的 "),s("code",[t._v("migration")]),t._v(" 文件，这里我们推荐使用 "),s("code",[t._v("Semo")]),t._v(" 的方式进行创建：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("semo generate migration new_table --attributes"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("name:string,age:integer\n")])])]),s("p",[t._v("生成的样本代码大致如下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'use strict'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("up")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("queryInterface"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Sequelize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" queryInterface"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createTable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pf_new_table'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        allowNull"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        autoIncrement"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        primaryKey"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Sequelize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("INTEGER")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Sequelize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("STRING")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      age"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Sequelize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("INTEGER")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      createdAt"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        allowNull"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Sequelize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DATE")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      updatedAt"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        allowNull"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Sequelize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DATE")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("down")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("queryInterface"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Sequelize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" queryInterface"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dropTable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pf_new_table'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("这样我们不仅得到了 "),s("code",[t._v("migration")]),t._v(" 文件，还得到了基本的数据结构样板代码，在要求不高的情况下，这样建立的 "),s("code",[t._v("migration")]),t._v(" 是直接可用的，但是如果要求比较高，是需要在生成的样板文件基础上继续改进的，比如字段的长度进一步精细化，加索引等等。")]),t._v(" "),s("p",[t._v("如果是一次增加多个字段，还能自动生成类似 "),s("code",[t._v("Promise.all")]),t._v(" 的逻辑。")]),t._v(" "),s("h2",{attrs:{id:"数据库相关的命令工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库相关的命令工具"}},[t._v("#")]),t._v(" 数据库相关的命令工具")]),t._v(" "),s("p",[t._v("Semo 及插件为我们提供了几个常用的命令行工具，如下：")]),t._v(" "),s("h3",{attrs:{id:"生成-migration-文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成-migration-文件"}},[t._v("#")]),t._v(" 生成 "),s("code",[t._v("migration")]),t._v(" 文件")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ semo generate migration\n$ semo sequelize migration\n")])])]),s("h3",{attrs:{id:"查看数据表的描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看数据表的描述"}},[t._v("#")]),t._v(" 查看数据表的描述")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ semo sequelize describe sm_project\n")])])]),s("p",[t._v("输入如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  field      :  type                     :  allowNull :  defaultValue                         :  primaryKey :  comment\n  id         :  INTEGER                  :  false     :  nextval(sm_project_id_seq::regclass) :  true       :\n  name       :  CHARACTER VARYING(255)   :  true      :                                       :  false      :\n  finishedAt :  TIMESTAMP WITH TIME ZONE :  true      :                                       :  false      :\n  created_at :  TIMESTAMP WITH TIME ZONE :  true      :                                       :  false      :\n  updated_at :  TIMESTAMP WITH TIME ZONE :  true      :                                       :  false      :\n\n")])])]),s("h3",{attrs:{id:"查看数据库中的表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看数据库中的表"}},[t._v("#")]),t._v(" 查看数据库中的表")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ semo sequelize list\n")])])]),s("p",[t._v("输出如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sm_project\n...\n")])])]),s("h3",{attrs:{id:"通过命令执行-sql-语句"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过命令执行-sql-语句"}},[t._v("#")]),t._v(" 通过命令执行 SQL 语句")]),t._v(" "),s("p",[t._v("有时候，我们需要快速查看一条数据，这时我们可以用数据库专用的命令行工具或者数据库管理客户端软件，但是这里也提供了一个简单的命令工具支持。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ semo sequelize query 'select * from sm_project where id = 1' --fields=id,name\n")])])]),s("p",[t._v("输出大致如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  id :  name\n  1  :  xxx\n")])])]),s("h3",{attrs:{id:"对-my-cli-pg-cli-sqlite-的封装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对-my-cli-pg-cli-sqlite-的封装"}},[t._v("#")]),t._v(" 对 my_cli, pg_cli, sqlite 的封装")]),t._v(" "),s("p",[t._v("my_cli, pg_cli 是非常好用的数据库命令行客户端，sqlite3 是安装 Sqlite3 数据库引擎之后内置的， 在已安装好的前提下，我们可以通过 "),s("code",[t._v("Semo")]),t._v(" 命令的方式进行调用，可以不考虑链接信息。")]),t._v(" "),s("p",[t._v("这里根据配置的数据库引擎不同，会自动进入对应的 REPL 命令行环境。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ semo cli\nServer: PostgreSQL VERSION\nVersion: VERSION\nChat: https://gitter.im/dbcli/pgcli\nMail: https://groups.google.com/forum/#!forum/pgcli\nHome: http://pgcli.com\nuser@postgres:user>\n")])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);