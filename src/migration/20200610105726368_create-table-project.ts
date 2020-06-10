'use strict';

export = {
  up: function(queryInterface: any, Sequelize: any) {
    return queryInterface.createTable('sm_project', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      finishedAt: {
        type: Sequelize.DATE
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
    return queryInterface.dropTable('sm_project');
  }
};