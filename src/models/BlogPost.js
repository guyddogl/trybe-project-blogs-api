const { DataTypes } = require('sequelize');

const attributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  content: {
    allowNull: false,
    type: DataTypes.STRING
  },
  userId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    foreignKey: true
  },
  published: {
    allowNull: false,
    type: DataTypes.DATE
  },
  updated: {
    allowNull: false,
    type: DataTypes.DATE
  },
}

module.exports = (sequelize) => {
  const BlogPost = sequelize.define('BlogPost', attributes, {
    tableName: 'blog_posts',
    timestamps: false,
    underscored: true,
  })
  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: 'userId', as: 'user',
    })
  }
  return BlogPost;
}