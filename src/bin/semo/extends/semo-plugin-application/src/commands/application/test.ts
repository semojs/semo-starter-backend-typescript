import { Utils } from '@semo/core'

export const disabled = false // Set to true to disable this command temporarily
export const command = 'test'
export const desc = 'This is a test command, you can delete me.'
// export const aliases = ''
// export const middleware = (argv) => {}

export const builder = function (yargs: any) {
  // yargs.option('option', { default, describe, alias })
  // yargs.commandDir('test')
}

export const handler = async function (argv: any) {
  Utils.info('This is a test command, you can delete me!')
  Utils.log('Start to draw your dream code!')
}
