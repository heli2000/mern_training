const port = 3000;
const express = require('express');
const app = express();
require('./db/config');
const User = require('./src/controllers/UserController');
const bodyParser = require('body-parser')

app.use(bodyParser.json());

app.post('/register',User.createUser);

app.post('/login',User.loginUser);

app.listen(port);
