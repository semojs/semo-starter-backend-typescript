import { Utils } from '@semo/core'

export const builder = function (yargs) {
  // yargs.option('option', {default, describe, alias})
}

export const handler = async function (argv) {
  Utils.info('I am a test script!', true)
}
