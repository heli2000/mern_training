const port = 3000;
const express = require('express');
const app = express();
require('./db/config');
const User = require('./src/controllers/UserController');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:3002'
}));

app.use(bodyParser.json());

app.post('/register',User.createUser);

app.post('/login',User.loginUser);

app.get('/listUser',User.listUsers);

app.post('/editUser',User.editUser)

app.listen(port);
