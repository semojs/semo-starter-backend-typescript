/**
 * 模型基础代码生成器，默认生成的代码暂时了模型文件的能力，需要按需删减
 *
 * example:
 *   semo generate model test
 */
import { Utils } from '@semo/core'
import fs from 'fs'
import path from 'path'

export const command = 'model <name>'
export const desc = 'Generate a application model'

export const builder = function (yargs) {
  yargs.option('typescript', {
    alias: 'ts',
    describe: 'generate typescript style code'
  })

  yargs.option('database', {
    alias: 'db',
    describe: 'choose which db model to make',
    default: ''
  })

}

export const handler = function (argv) {
  const modelDir = argv.modelMakeDir || argv.modelDir
  if (!modelDir || !fs.existsSync(modelDir)) {
    console.log(Utils.chalk.red('"modelDir" missing in config file or not exist in current directory!'))
    return
  }

  const modelName = Utils._.chain(argv.name)
    .camelCase()
    .upperFirst().value()

  const modelFile = path.resolve(modelDir, argv.database, `${modelName}.${argv.typescript ? 'ts' : 'js'}`)
  if (fs.existsSync(modelFile)) {
    console.log(Utils.chalk.red('model file exist!'))
    return
  }

  const code = `import { Model } from 'sequelize'

class ${modelName} extends Model {
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
  static associate () {
    console.log('I will do model relations association!')
  }
}

export default ${modelName}
`
  if (!fs.existsSync(modelFile)) {
    fs.writeFileSync(modelFile, code)
    console.log(Utils.chalk.green(`${modelFile} created!`))
  }
}
