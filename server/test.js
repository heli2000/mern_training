const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({
  secret: 'yoursecretkey',
  resave: false,
  saveUninitialized: true
}));

app.post('/login', (req, res) => {
  

  // Check the user credentials against your database
  
    req.session.user = "heli";
    res.send({ message: 'Login successful' });
 
});

app.get('/', (req, res) => {
  if (req.session.user) {
    res.send(`Welcome, ${req.session.user.username}`);
  } else {
    res.send('Welcome, guest');
  }
});

app.listen(4000, () => {
  console.log('Example app listening on port 3000');
});
