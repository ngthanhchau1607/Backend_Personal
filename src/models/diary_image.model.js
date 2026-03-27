const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const DiaryImage = sequelize.define(
  "DiaryImage",
  {
    diary_id: { type: DataTypes.BIGINT, allowNull: false, primaryKey: true },
    images: { type: DataTypes.STRING, allowNull: false, primaryKey: true },
  },
  { tableName: "diary_images", timestamps: false, underscored: true },
);

module.exports = DiaryImage;
