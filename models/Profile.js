module.exports = (sequelize, DataTypes) => {
    const Profile = sequelize.define("Profile", {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    return Profile;
  };
  