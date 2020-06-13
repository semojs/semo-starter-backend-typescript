/**
 * @file
 *
 * For Sequelize Cli db connection
 */

const { Utils } = require('@semo/core')
const appConfig = Utils.getApplicationConfig()
const db = appConfig.app.db || Utils._.get(appConfig, 'semo-plugin-sequelize.defaultConnection')
module.exports = require('semo-plugin-sequelize').sequelize.db.getConfig(db)
