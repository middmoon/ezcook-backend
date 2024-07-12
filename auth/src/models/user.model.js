'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {}
  }

  User.init(
    {
      _id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_name: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      first_name: {
        type: DataTypes.STRING,
      },
      middle_name: {
        type: DataTypes.STRING,
      },
      last_name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      image_link: {
        type: DataTypes.STRING,
      },
      role: {
        type: DataTypes.ENUM('ADMIN', 'CUSTOMER', 'STAFF'),
        defaultValue: 'USER',
      },
      full_name: {
        type: DataTypes.VIRTUAL,
        get() {
          return `${this.first_name} ${this.middle_name} ${this.last_name}`;
        },
      },
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'user',
      timestamps: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    }
  );

  return User;
};
