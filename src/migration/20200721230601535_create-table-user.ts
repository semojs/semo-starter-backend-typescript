'use strict';

export = {
  up: function(queryInterface: any, Sequelize: any) {
    return queryInterface.createTable('sm_User', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      }
    });
  },

  down: function(queryInterface: any, Sequelize: any) {
    return queryInterface.dropTable('sm_User');
  }
};