
module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define('Department',{
    departmentName: DataTypes.STRING,
    jobId: DataTypes.INTEGER
  },{});

  Department.associate = (models) =>{
    Department.belongsTo(models.Employee,{
      as:'employee',
      foreignKey:'departmentId'
    });
    Department.hasMany(models.Job,{
      as:'job',
      foreignKey:'jobId'
    });
  };

  return Department;
};
