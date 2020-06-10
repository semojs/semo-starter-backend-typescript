# 模型定义

脚手架里对模型的封装首先是基于 Sequelize 的，所以模型就是 Sequelize 的模型实例，但是定义模型时，希望避免之前项目中需要手动定义 `Schema` 或者需要需要同步下载自动生成 `Schema。`

`Sequelize` 的模型定义本身是需要提供 `Schema` 的，这里通过 `semo-plugin-sequelize` 自动完成了这部分，所以会使得模型定义更加简洁，只需要考虑业务逻辑。

## 生成样板文件

脚手架提供了生成样板代码的命令

```
semo create model project
```

样板代码示例：

```js
import { Model } from 'sequelize'

class Project extends Model {
  id: number

  static customModelStaticMethod = () => {
    console.log('I am a custom static method!')
  }

  get customVirtualProperty () {
    console.log('I am a custom virtual property!')
    return 'customVirtualProperty'
  }

  customInstanceMethod () {
    console.log('I am a custom instance method!')
  }

  // 约定的声明模型关系的方法，必须是静态方法
  static associate () {
    console.log('I will do model relations association!')
  }
}

export default Project
```

- 这是标准的 Sequelize 定义模型的方案，只是不用使用 Sequelize 的类型定义字段了
- 这里的字段声明是为了符合 TS 的校验，用的是 TS 的类型语法

注意，每个模型样板代码生成之后都需要按需修改。这个样板代码是为了给人提示一个模型可以实现的特性：

* 模型关系定义 (Associations)
* 模型方法 (Class level methods)
* 模型实例方法 (Instance level methods)
* 模型变量 (Setters and Getters)


## 其他须知

在真实的业务中，经常会有一些业务逻辑是需要多表联合查询的，这种方法是不建议定义在模型里的，而是在  `Service` 层来做这个事情。

模型样板代码生成脚本在 `bin/semo/extends/semo/src/commands/generate/model.ts`，所以可以按照自己的需求随意更改。
