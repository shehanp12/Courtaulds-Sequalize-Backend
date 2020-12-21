const sequalize = require("sequelize")

module.exports = (sequalize,DataTypes) =>{

    const Profile = sequalize.define("Profile",{

        name:{
            type:DataTypes.STRING,
            allowedNull:false

        }

    });

    Profile.associate = models => {
        Profile.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    }


    return Profile;
}
