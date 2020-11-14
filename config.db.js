/**
 * @file
 *
 * For Sequelize Cli db connection
 */

const { Utils } = require('@semo/core')
Utils.extendConfig('application.yml', '$app')
const db = Utils.config('$app.db') || Utils.config('$plugin.sequelize.defaultConnection')
module.exports = require('semo-plugin-sequelize').sequelize.getConfig(db)
