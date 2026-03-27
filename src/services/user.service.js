const User = require("../models/user.model");

const bcrypt = require("bcrypt");

// Số vòng salt, thường là 10
const SALT_ROUNDS = 10;

const createUser = async (data) => {
  // Mã hóa mật khẩu trước khi tạo user
  if (data.password) {
    const hashedPassword = await bcrypt.hash(data.password, SALT_ROUNDS);
    data.password = hashedPassword;
  }

  return await User.create(data);
};

// Hàm login
const loginUser = async (username, password) => {
  const user = await User.findOne({ where: { username } });
  if (!user) return null;

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return null;

  // Trả về user mà không bao gồm password
  const { password: _, ...userWithoutPassword } = user.toJSON();
  return userWithoutPassword;
};

const getAllUsers = async () => {
  return await User.findAll();
};

const getUserById = async (id) => {
  return await User.findByPk(id);
};

const updateUser = async (id, data) => {
  const user = await User.findByPk(id);
  if (!user) return null;

  await user.update(data);
  return user;
};

const deleteUser = async (id) => {
  const user = await User.findByPk(id);
  if (!user) return null;

  await user.destroy();
  return true;
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  loginUser,
};
