"use strict";
const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define("companies", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      companyName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      industry: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      service:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      keywords: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      numberOfEmployees: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
     websiteUrl: {
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

  Company.associate = (models) => {
    //console.log(`models: ${models}`);
    Company.hasMany(models.Employees, {
      as: "employees",
      foreignKey: "fk_company_id",
      targetKey: "id",
    });
}

  Company.beforeCreate(async (user) => {
    user.dataValues.createdAt = moment().unix();
    user.dataValues.updatedAt = moment().unix();
  });
  Company.beforeUpdate(async (user) => {
    user.dataValues.updatedAt = moment().unix();
  });

  return Company;
};
