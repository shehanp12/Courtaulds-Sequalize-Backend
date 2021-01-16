
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee',{


    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    password:DataTypes.STRING,
    email:DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    employeeAdress: DataTypes.STRING,
    departmentId: DataTypes.INTEGER

  },{});

  Employee.associate = (models) => {

    Employee.hasMany(models.Department, {
      as: 'department',
      foreignKey: 'departmentId',
    });

    // Employee.belongsTo(models.BoardingHouse,{
    //   as:'employee',
    //   foreignKey:'id'
    //
    // })

  };


  return Employee;
};
