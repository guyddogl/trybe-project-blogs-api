const { DataTypes } = require('sequelize');

const attributes = {
  postId: {
    type: DataTypes.INTEGER,
    primaryKey: true

  },
  categoryId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
}

module.exports = (sequelize) => {
  const PostCategory = sequelize.define('PostCategory', attributes, {
    tableName: 'posts_categories',
    timestamps: false,
    underscored: true,
  })
  PostCategory.associate = ({ BlogPost, Category }) => {
    BlogPost.belongsToMany(Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId'

    })
    Category.belongsToMany(BlogPost, {
      as: 'posts',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId'

    })
  }
  return PostCategory;
}