import { Model } from 'sequelize'

/**
 * 项目模型类
 *
 * 标准的 Sequelize 定义模型的方法，只是不用使用 Sequelize 的类型定义字段了
 * 这里的字段声明是为了符合 TS 的校验，用的是 TS 的类型
 *
 * **注意静态方法，实例方法和虚拟属性的区别**
 */
class Project extends Model<Project> {
  /**
   * ID xxxx
   */
  id: number

  /**
   * 项目名称
   */
  name: string

  /**
   * 示例静态方法
   */
  static customModelStaticMethod = () => {
    console.log('I am a custom static method!')
  }

  /**
   * 示例虚拟变量方法
   */
  get customVirtualProperty () {
    return 'customVirtualProperty'
  }

  /**
   * 示例实例方法
   */
  customInstanceMethod () {
    console.log('I am a custom instance method!')
  }

  /**
   * 接口方法，用于声明模型之间的关系
   *
   * **必须是静态方法**
   */
  static associate ({ User: User}) {
    // Project.belongsTo(User)
  }
}

export default Project
