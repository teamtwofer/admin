'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('user', {
    email: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    hashedPassword: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  }, {
    classMethods: {
      associate: () => {
      }
    },
    tableName: 'user',
    
    
    schema: process.env.DATABASE_SCHEMA,
  });

  return Model;
};

