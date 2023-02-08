const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  if (req.session.user === undefined && req.session.token === undefined) {
    res.send({ login: false });
  } else {
    try {
      const decoded = jwt.verify(
        req.session.token,
        process.env.TOKEN_SECRET_KEY
      );
      next();
    } catch (error) {
      res.send({ login: false });
    }
  }
};

module.exports = {
  authentication,
};
