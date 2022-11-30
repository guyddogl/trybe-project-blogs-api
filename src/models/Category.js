const { DataTypes } = require('sequelize');

const attributes = {
  id: {
    primaryKey: true,
    type: DataTypes.STRING,
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