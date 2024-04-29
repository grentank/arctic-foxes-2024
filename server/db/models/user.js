const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.Message, { foreignKey: 'userId' });
    }
  }
  User.init({
    email: DataTypes.STRING,
    hashpass: DataTypes.TEXT,
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
