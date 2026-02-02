const User = require("../models/userModel");


// GET /users
const getAllUsers = (req, res) => {
  console.log("Hello from getAllUsers");
  const users = User.getAll();
  if (users.length !== 0) {
    res.json(users);
  }
};

// POST /users
const createUser = (req, res) => {
  console.log("Hello from createUser");
  const newUser = User.addOne({ ...req.body });

  if (newUser) {
    res.json(newUser);
  } else {
    res.status(500).json({ message: "Failed to create user" });
  }
};

// GET /users/:userId
const getUserById = (req, res) => {
  console.log("Hello from getUserById");
  const userId = req.params.userId;
  const user = User.findById(userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

// PUT /users/:userId
const updateUser = (req, res) => {
  console.log("Hello from updateUser");
  const userId = req.params.userId;
  const updatedUser = User.updateOneById(userId, { ...req.body });

  if (updatedUser) {
    res.json(updatedUser);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

// DELETE /users/:userId
const deleteUser = (req, res) => {
  console.log("Hello from deleteUser");

  const userId = req.params.userId;
  const isDeleted = User.deleteOneById(userId);

  if (isDeleted) {
    res.json({ message: "User deleted successfully" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
