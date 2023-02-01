const User = require("../models/UserModel");

const createUser = async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      pass: req.body.pass,
      isAdmin: req.body.isAdmin ? req.body.isAdmin : false,
    });

    const result = await user.save();
    res.send({ message: "user created successfully", userData: result });
  } catch (error) {
    res.send(error.message);
  }
};

const loginUser = async (req, res) => {
  try {
    let result = await User.find(req.body);
    if (result.length > 0) {
      if (req.session.user !== undefined) {
        res.send({ message: "You are already logged in" });
      } else {
        req.session.user = req.body.name;
        res.send({ message: "Login successfully", userData: { ...result } });
      }
    } else {
      res.send({ message: "Username or password is incorrect" });
    }
  } catch (error) {
    res.send(error.message);
  }
};

const listUsers = async (req, res) => {
  try {
    console.log(req.session);
    if (req.session.user === undefined) {
      res.send({ message: "access denied" });
    } else {
      let result = await User.find({ _id: { $ne: req.query.id } });
      res.send({ UserData: result });
    }
  } catch (error) {
    res.send(error.message);
  }
};

const editUser = async (req, res) => {
  try {
    let update = await User.updateOne(
      { _id: req.body.id },
      { $set: { name: req.body.name } }
    );
    if (update.acknowledged) {
      res.send({ message: "User Updated successfully" });
    } else {
      res.send({ error: "Something went wrong" });
    }
  } catch (error) {
    res.send(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    let deleteU = await User.deleteOne({
      _id: req.body.id,
    });
    if (deleteU.deletedCount === 1) {
      res.send({ message: "User Deleted successfully" });
    } else {
      res.send({ error: "Something went wrong" });
    }
  } catch (error) {
    res.send(error.message);
  }
};

const logoutUser = (req, res) => {
  if (req.session.user) {
    req.session.destroy();
    res.clearCookie("mernsession");
    res.send({ message: "user Logged out" });
  } else {
    res.send({ message: "no login information found for this user" });
  }
};

module.exports = {
  createUser,
  loginUser,
  listUsers,
  editUser,
  deleteUser,
  logoutUser,
};
