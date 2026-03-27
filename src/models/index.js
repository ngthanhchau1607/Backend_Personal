const sequelize = require("../config/database");

const Diary = require("./diary.model");
const DiaryImage = require("./diary_image.model");
const Person = require("./person.model");
const Transaction = require("./transaction.model");
const Sport = require("./sport.model");
const Category = require("./category.model");
const Technique = require("./technique.model");

// Associations
Diary.hasMany(DiaryImage, { foreignKey: "diary_id", as: "images" });
DiaryImage.belongsTo(Diary, { foreignKey: "diary_id" });

Person.hasMany(Transaction, { foreignKey: "person_id", as: "transactions" });
Transaction.belongsTo(Person, { foreignKey: "person_id", as: "person" });

Sport.hasMany(Category, { foreignKey: "sport_id", as: "categories" });
Category.belongsTo(Sport, { foreignKey: "sport_id", as: "sport" });

Category.hasMany(Technique, { foreignKey: "category_id", as: "techniques" });
Technique.belongsTo(Category, { foreignKey: "category_id", as: "category" });

module.exports = {
  sequelize,
  Diary,
  DiaryImage,
  Person,
  Transaction,
  Sport,
  Category,
  Technique,
};
