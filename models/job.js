
module.exports = (sequelize, DataTypes) => {

  const Job = sequelize.define('Job',{
    jobName: DataTypes.STRING
  },{});

  

  return Job;
};
