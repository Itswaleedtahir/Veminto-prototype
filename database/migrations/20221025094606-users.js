"use strict";

const table = "users";

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await queryInterface.createTable(table, {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      DOB:{
        type:Sequelize.DATEONLY,
        allowNull: false,
      },
      gender: {
        type: Sequelize.ENUM("Male", "Female"," Other"),
        allowNull: false,
      },
      company:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      jobTitle:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      password:{
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
