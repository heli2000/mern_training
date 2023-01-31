const User = require("../models/UserModel");

const createUser = async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      pass: req.body.pass,
    });

    const result = await user.save();
    res.send({"message":"user created successfully","userData":result});
  } catch (error) {
    res.send(error.message);
  }
};

const loginUser = async (req, res) => {
  try {
    let result = await User.find(req.body);
    if (result.length > 0) {
      res.send({ message: "Login successfully", "userData":{...result} });
    } else {
      res.send({ message: "Username or password is incorrect"});
    }
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = {
  createUser,
  loginUser,
};
