require('dotenv').config();
const port = process.env.SERVER_PORT;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
var cookieParser = require('cookie-parser');
var LoginRoutes = require('./routes/userRouter');

app.use(
  cors({
    origin: process.env.CLIENT_URI,
    credentials: true
  })
);

app.use(cookieParser());

/** httpOnly is set to true because to secure to pass user data to cookie */
app.use(
  session({
    secret: process.env.SESSION_SECRET_KEY,
    name: process.env.SESSION_NAME,
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