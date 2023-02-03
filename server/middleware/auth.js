const authentication = (req,res,next) => {
    if (req.session.user === undefined) {
      res.send({login:false});
    }else{
      next();
    }
}

module.exports = {
    authentication
}