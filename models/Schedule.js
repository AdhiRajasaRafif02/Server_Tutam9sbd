module.exports = (sequelize, DataTypes) => {
    const Schedule = sequelize.define("Schedule", {
      day: {
        type: DataTypes.STRING,
        allowNull: false
      },
      subject: {
        type: DataTypes.STRING,
        allowNull: false
      },
      start_time: {
        type: DataTypes.TIME,
        allowNull: false
      },
      end_time: {
        type: DataTypes.TIME,
        allowNull: false
      },
      profile_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
  
    return Schedule;
  };
  