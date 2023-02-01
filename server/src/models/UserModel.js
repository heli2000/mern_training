const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:String,
    pass:String,
    isAdmin:Boolean
});

module.exports = mongoose.model("User",userSchema)