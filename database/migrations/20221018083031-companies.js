"use strict";

const table = "companies";

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await queryInterface.createTable(table, {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      companyName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      industry: {
        type: Sequelize.STRING,
        allowNull: false,
        
      },
      service:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      keywords: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      numberOfEmployees: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
     websiteUrl: {
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
