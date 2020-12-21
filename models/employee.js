
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee',{

    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    employeeAdress: DataTypes.STRING,
    departmentId: DataTypes.INTEGER

  },{});

  Employee.associate = (models) => {
    // associations can be defined here
    Employee.hasMany(models.Department, {
      as: 'department',
      foreignKey: 'departmentId',
    });
  };


  return Employee;
};
