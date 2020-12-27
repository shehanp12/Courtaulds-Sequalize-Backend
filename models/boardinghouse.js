
module.exports = (sequelize, DataTypes) => {

  const BoardingHouse = sequelize.define('BoardingHouse',{

    title: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    description: DataTypes.STRING,
    distance: DataTypes.DOUBLE,
    perMonth: DataTypes.DOUBLE,
    keyMoney: DataTypes.DOUBLE,
    imageUrl: DataTypes.STRING,
    checkGirlsOnly:DataTypes.BOOLEAN,
    checkParkingOnly:DataTypes.BOOLEAN,
    checkAttachBathroom:DataTypes.BOOLEAN,
    checkKitchen:DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER


  },{});

  BoardingHouse.associate = (models) => {

    // BoardingHouse.hasMany(models.Employee,{
    //   as:'user',
    //   foreignKey:'id'
    // })

  };




  return BoardingHouse;
};
