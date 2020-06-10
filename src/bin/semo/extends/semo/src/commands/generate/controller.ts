/**
 * 控制器代码生成器
 *
 * example:
 *   semo generate controller test
 */

import { Utils } from '@semo/core'
import fs from 'fs'
import path from 'path'

export const command = 'controller <name>'
export const desc = 'Generate a application model'

export const builder = function (yargs) {
  yargs.option('typescript', {
    alias: 'ts',
    describe: 'generate typescript style code'
  })
}

export const handler = function (argv) {
  const controllerDir = argv.controllerMakeDir || argv.controllerDir
  if (!controllerDir || !fs.existsSync(controllerDir)) {
    console.log(Utils.chalk.red('"controllerDir" missing in config file or not exist in current directory!'))
    return
  }

  const controllerName = Utils._.chain(argv.name)
    .camelCase()
    .upperFirst().value() + 'Controller'

  const controllerFile = path.resolve(controllerDir, `${controllerName}.${argv.typescript ? 'ts' : 'js'}`)
  if (fs.existsSync(controllerFile)) {
    console.log(Utils.chalk.red('controller file exist!'))
    return
  }

  const code = `import { JsonController, Get } from 'routing-controllers'
// import { Inject } from 'typedi'

@JsonController()
export class ${controllerName} {

  /**
   * @api {get} /api/${Utils._.kebabCase(argv.name)}/index index
   * @apiDescription index
   * @apiName GetIndex
   * @apiGroup GroupName
   *
   * @apiParam {Number} id ID.
   *
   * @apiSuccess {String} data info
   * @apiSuccess {String} code 0 means success, others are error code
   */
  @Get('/${Utils._.kebabCase(argv.name)}/index')
  async index () {
    return 'index'
  }
}
`
  if (!fs.existsSync(controllerFile)) {
    fs.writeFileSync(controllerFile, code)
    console.log(Utils.chalk.green(`${controllerFile} created!`))
  }
}
