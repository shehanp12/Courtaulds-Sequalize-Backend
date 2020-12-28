

module.exports = (sequelize, DataTypes) => {
  const boardingProvider = sequelize.define('boardingProvider',{
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    contactNumber: DataTypes.STRING,
    userName: DataTypes.STRING,
    address: DataTypes.STRING,
    password:DataTypes.STRING

  },{});

  boardingProvider.associate = (models) =>{

  }
  return boardingProvider;
};
