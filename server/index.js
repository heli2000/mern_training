const port = 3000;
const express = require("express");
const app = express();
require("./db/config");
const User = require("./src/controllers/UserController");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
var cookieParser = require('cookie-parser');

app.use(
  cors({
    origin: "http://localhost:3002",
    credentials: true
  })
);

app.use(cookieParser());

app.use(
  session({
    secret: "thisisverysecret",
    name: "mernsession",
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    resave:false
  })
);

//for samesite and proxy urls
app.set("trust proxy", 1);

app.use(bodyParser.json());

app.post("/register", User.createUser);

app.post("/login", User.loginUser);

app.get("/listUser", User.listUsers);

app.post("/editUser", User.editUser);

app.post("/deleteUser", User.deleteUser);

app.get("/logout", User.logoutUser);

app.listen(port);
