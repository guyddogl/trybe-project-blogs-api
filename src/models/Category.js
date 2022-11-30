const { DataTypes } = require('sequelize');

const attributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING
  },
}

module.exports = (sequelize) => {
  const Category = sequelize.define('Category', attributes, {
    tableName: 'categories',
    timestamps: false,
  })
  return Category;
}