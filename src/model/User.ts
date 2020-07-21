import { Model } from 'sequelize'

export class User extends Model {
  name: string
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
  static associate ({ Project }) {
    // User.hasOne(Project)
  }
}

