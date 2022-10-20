"use strict";
const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define("services", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      service: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      companiesId:{
        type: DataTypes.INTEGER,
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
  Service.associate = (models) => {
    Service.belongsTo(models.Companies, {
      as: "company",
      foreignKey: "companiesId",
      targetKey: "id",
    });
  }
  Service.beforeCreate(async (user) => {
    user.dataValues.createdAt = moment().unix();
    user.dataValues.updatedAt = moment().unix();
  });
  Service.beforeUpdate(async (user) => {
    user.dataValues.updatedAt = moment().unix();
  });

  return Service;
};
