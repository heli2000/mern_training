const User = require("../models/UserModel");

const createUser = async (req, res) => {
  try {
    const user = new User({
      name: req.name,
      pass: req.pass,
    });

    const result = await user.save();
    res.send("user created successfully");
  } catch (error) {
    res.send(error.message);
  }
};

const loginUser = async (req, res) => {
  try {
    let result = await User.find(req.body);
    if(result.length > 0){
        res.send({"message":"Login successfully",...result});
    }else{
        res.send({"message":"Username or password is incorrect",...result});
    }
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = {
  createUser,
  loginUser,
};
