const { DataTypes } = require('sequelize');

const attributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  displayName: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  image: {
    type: DataTypes.STRING
  },
}

module.exports = (sequelize) => {
  const User = sequelize.define('User', attributes, {
    tableName: 'users',
    timestamps: false,
    underscored: true,
  })
  User.associate = (models) => {
    User.hasMany(models.BlogPost, {
      foreignKey: 'userId', as: 'posts'
    })
  }
  return User;
}