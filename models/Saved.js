// models/savedWord.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Saved extends Model { }

Saved.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    word: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    modelName: 'saved',
    underscored: true,
  }
);

module.exports = Saved;