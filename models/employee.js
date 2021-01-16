
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee',{


    

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
