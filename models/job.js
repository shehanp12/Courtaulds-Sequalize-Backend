
module.exports = (sequelize, DataTypes) => {

  const Job = sequelize.define('Job',{
    jobName: DataTypes.STRING
  },{});

  Job.associate = (models) =>{
    Job.belongsTo(models.Department,{
      as:'department',
      foreignKey:'jobId'
    })
  }

  return Job;
};
