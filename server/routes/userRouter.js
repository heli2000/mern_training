const express = require("express");
require("../db/config");
const User = require("../controllers/UserController");
const router = express.Router();
const Auth = require("../middleware");

router.post("/register", User.createUser);

router.post("/login", User.loginUser);

router.get("/listUser", Auth.authentication, User.listUsers);

router.post("/editUser", Auth.authentication, User.editUser);

router.post("/deleteUser", Auth.authentication, User.deleteUser);

router.get("/logout", Auth.authentication, User.logoutUser);

module.exports = router;
