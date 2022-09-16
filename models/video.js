'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class video extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  video.init({
    videodescription: DataTypes.STRING,
    uploaddate: DataTypes.DATE,
    userID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'video',
  });
  return video;
};