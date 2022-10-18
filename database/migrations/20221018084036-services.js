"use strict";

const table = "services";

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await queryInterface.createTable(table, {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      service: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      companiesId:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    })
  },
  down: async function (queryInterface) {
    await queryInterface.dropTable(table);
  },
};
