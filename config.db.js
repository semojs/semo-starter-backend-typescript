/**
 * @file
 *
 * For Sequelize Cli db connection
 */

const { Utils } = require('@semo/core')
const db = Utils.config('app.db') || Utils.config('$plugin.sequelize.defaultConnection')
module.exports = require('semo-plugin-sequelize').sequelize.getConfig(db)
