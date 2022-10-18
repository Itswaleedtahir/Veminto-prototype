"use strict";

const table = "employees";

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await queryInterface.createTable(table, {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      employeeName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      designation:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      experience:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      fk_company_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      skills:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      linkedinProfile:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      email:{
        type: Sequelize.STRING,
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
