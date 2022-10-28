'use strict';
const { DataTypes, QueryInterface } = require('sequelize')

module.exports = {
  async up (QueryInterface, Sequelize) {
    await QueryInterface.addColumn('bands', 'recommendation', {
      type: DataTypes.STRING
    })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.removeColumn('bands', 'recommendation')
  }
};