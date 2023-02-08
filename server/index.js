const port = 3000;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
var cookieParser = require('cookie-parser');
var LoginRoutes = require('./routes/userRouter');

app.use(
  cors({
    origin: "http://localhost:3002",
    credentials: true
  })
);

app.use(cookieParser());

/** httpOnly is set to true because to secure to pass user data to cookie */
app.use(
  session({
    secret: "thisisverysecret",
    name: "mernsession",
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24, httpOnly: true },
    resave:false
  })
);

//for samesite and proxy urls
app.set("trust proxy", 1);

app.use(bodyParser.json());

app.use(LoginRoutes);

app.listen(port);