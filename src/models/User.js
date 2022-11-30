const { DataTypes } = require('sequelize');

const attributes = {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  display_name: {
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
  })
  return User;
}