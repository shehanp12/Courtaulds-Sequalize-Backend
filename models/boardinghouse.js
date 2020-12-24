'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BoardingHouse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  BoardingHouse.init({
    title: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    description: DataTypes.STRING,
    distance: DataTypes.DOUBLE,
    perMonth: DataTypes.DOUBLE,
    keyMoney: DataTypes.DOUBLE,
    imageUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BoardingHouse',
  });
  return BoardingHouse;
};