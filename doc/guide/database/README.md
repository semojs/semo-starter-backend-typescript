# 数据库和模型管理

首先可以看到，数据库的链接是通过 Semo 及其插件提供的，整个脚手架自己不需要考虑如何连接的问题。其次，这里同时支持连单个以及多个数据库的逻辑，db 和 Op 会被写入全局变量。

在实际实现业务逻辑的时候，有多种方式去访问模型和数据库。

## 获取 `db` 数据库实例

### 脚手架初始化的数据库实例

使用全局变量 `db.models` 来访问数据模型很方便，我们在 helper 层定义一些需要访问数据库的方法时可以使用这种方式，获得的模型就是 Sequelize 的模型实例，因此具体用法可以参考[官方文档](http://docs.sequelizejs.com)：

```js
const { Project } = db.models // db 是全局已经初始化好的数据库实例对象
const results = await Project.findAll({})
```

### 直接使用 Semo 提供的 hook 机制

使用这种方式甚至不需要在初始化的时候考虑数据库，用的时候直接调用即可，一般我们推荐在命令行工具，脚本中使用这种方式。另外，整个底层环境中有多个数据库，有的后端项目是需要跨库写逻辑的，这时也可以使用这种方式。

```js
const { sequelize } = await Utils.invokeHook('semo:component')
  const { models: { Account, Profile } } = await sequelize.load('myDb')

  const account = await Account.findOne({
    attributes: ['id'],
    raw: true,
    include: [{
      model: Profile,
      attributes: ['id']
    }],
    where: {
      name: 'bob'
    }
  })

  Utils.log(account)
```

:::tip
`db.load` 方法有两个配置项：
```js
{
  modelKey: true, // 如果一个项目连接多个数据库，模型文件需要基于 modelDir 分多个目录存放
  raw: true, // 全局默认f返回值为 JSON 格式
})
```

## 连接多个数据库

默认脚手架提供的代码以及示例都是假设项目连接的是单一数据库，但是有时我们的业务项目是需要连接多个数据库来提供服务的，比如一些数据分析处理相关的业务，这时我们在配置数据库时就要声明多个数据库的连接。

这里主要是指 `config/default.js`, 之前我们的配置是：

```js
...
db: 'db1',
...
```

使用时大致如下：

```js
const { Account } = db.models
```

使用了多库之后，配置文件我们改成:

```js
...
db: {
  db1: 'db1',
  db2: 'db2'
}
...
```

使用时大致如下：

```js
const { Account } = db.db1.models
```

## 数据库变更管理

`migration`文件做为本脚手架唯一接受的数据库变更方式必须得到重视，我们不推荐一切非 `migration` 的数据库变更方式，包括但不限于自己写脚本，手动执行 SQL等等。在 `migration` 文件的 `up/down` 方法里，我们推荐使用 `Sequelize` ORM 方式操作数据库。

### `migration` 文件长什么样子

```js
'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {

  },

  down: function(queryInterface, Sequelize) {

  }
};
```

当我们执行 `yarn sequelize db:migrate` 时会触发 `up` 函数的脚本，当我们执行 `yarn sequelize db:migrate:undo` 或者 `yarn sequelize db:migrate:undo:all` 时会触发 `down` 函数的逻辑。更多 `sequelize-cli` 命令的信息可以执行 `yarn sequelize help`。

### `migration` 文件怎么创建

我们当然可以使用手动的方式，但是这样一来，每次都需要重复输入这些样板代码，略显麻烦。另一种方式是使用 `yarn sequelize migration:generate` 的方式，这里也是支持的，但是我们只能得到一个空的 `migration` 文件，这里我们推荐使用 `Semo` 的方式进行创建：

```bash
semo generate migration new_table --attributes=name:string,age:integer
```

生成的样本代码大致如下：

```js
'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('pf_new_table', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('pf_new_table');
  }
};
```

这样我们不仅得到了 `migration` 文件，还得到了基本的数据结构样板代码，在要求不高的情况下，这样建立的 `migration` 是直接可用的，但是如果要求比较高，是需要在生成的样板文件基础上继续改进的，比如字段的长度进一步精细化，加索引等等。

如果是一次增加多个字段，还能自动生成类似 `Promise.all` 的逻辑。

## 数据库相关的命令工具

Semo 及插件为我们提供了几个常用的命令行工具，如下：

### 生成 `migration` 文件

```
$ semo generate migration
$ semo sequelize migration
```

### 查看数据表的描述

```
$ semo sequelize describe sm_project
```

输入如下：

```
  field      :  type                     :  allowNull :  defaultValue                         :  primaryKey :  comment
  id         :  INTEGER                  :  false     :  nextval(sm_project_id_seq::regclass) :  true       :
  name       :  CHARACTER VARYING(255)   :  true      :                                       :  false      :
  finishedAt :  TIMESTAMP WITH TIME ZONE :  true      :                                       :  false      :
  created_at :  TIMESTAMP WITH TIME ZONE :  true      :                                       :  false      :
  updated_at :  TIMESTAMP WITH TIME ZONE :  true      :                                       :  false      :

```

### 查看数据库中的表

```
$ semo sequelize list
```

输出如下：

```
sm_project
...
```

### 通过命令执行 SQL 语句

有时候，我们需要快速查看一条数据，这时我们可以用数据库专用的命令行工具或者数据库管理客户端软件，但是这里也提供了一个简单的命令工具支持。

```
$ semo sequelize query 'select * from sm_project where id = 1' --fields=id,name
```

输出大致如下：

```
  id :  name
  1  :  xxx
```

### 对 my_cli, pg_cli, sqlite 的封装

my_cli, pg_cli 是非常好用的数据库命令行客户端，sqlite3 是安装 Sqlite3 数据库引擎之后内置的， 在已安装好的前提下，我们可以通过 `Semo` 命令的方式进行调用，可以不考虑链接信息。

这里根据配置的数据库引擎不同，会自动进入对应的 REPL 命令行环境。

```
$ semo cli
Server: PostgreSQL VERSION
Version: VERSION
Chat: https://gitter.im/dbcli/pgcli
Mail: https://groups.google.com/forum/#!forum/pgcli
Home: http://pgcli.com
user@postgres:user>
```
