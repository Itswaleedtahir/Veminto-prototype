"use strict";
const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define("employees", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      employeeName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      designation:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      experience:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      fk_company_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      skills:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      linkedinProfile:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      email:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
  });
  Employee.associate = (models) => {
    console.log(`models: ${models}`);
    Employee.belongsTo(models.Companies, {
      as: "company",
      foreignKey: "fk_company_id",
      targetKey: "id",
    });
  };
  Employee.beforeCreate(async (user) => {
    user.dataValues.createdAt = moment().unix();
    user.dataValues.updatedAt = moment().unix();
  });
  Employee.beforeUpdate(async (user) => {
    user.dataValues.updatedAt = moment().unix();
  });

  return Employee;
};
