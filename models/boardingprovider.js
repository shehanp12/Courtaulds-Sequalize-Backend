

module.exports = (sequelize, DataTypes) => {
  const boardingProvider = sequelize.define('boardingProvider',{
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    contactNumber: DataTypes.STRING,
    userName: DataTypes.STRING,
    address: DataTypes.STRING,
    checkGirlsOnly:DataTypes.BOLLEAN
  },{});

  boardingProvider.associate = (models) =>{

  }
  return boardingProvider;
};
