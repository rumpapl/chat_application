// external imports
const bcrypt = require("bcrypt");

// internal imports
const User = require("../models/People");

// get users page
async function getUsers(req, res, next) {
  // fatch all user or send error
  try {
    const users = await User.find();
    // console.log(users);
    res.render("users", {
      users: users,
    });
  } catch (err) {
    next(err);
  }
}

// add user
async function addUser(req, res, next) {
  let newUser;
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  if (req.files && req.files.length > 0) {
    newUser = new User({
      ...req.body,
      avatar: req.files[0].filename,
      password: hashedPassword,
    });
  } else {
    newUser = new User({
      ...req.body,
      password: hashedPassword,
    });
  }

  // save user or send error
  try {
    const result = await newUser.save();
    res.status(200).json({
      message: "User was added successfully!",
    });
  } catch (err) {
    res.status(500).json({
      errors: {
        common: {
          msg: "Unknown error!",
        },
      },
    });
  }
}

module.exports = {
  getUsers,
  addUser,
};
