/**
 * @file
 *
 * For Sequelize Cli db connection
 */

module.exports = require('semo-plugin-sequelize').sequelize.db.getConfig(require('config').db)
