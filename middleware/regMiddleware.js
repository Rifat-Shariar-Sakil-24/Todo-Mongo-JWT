const User = require("../models/User");
const mongoose = require('mongoose');

const foundEmail = async function(email){
   const found =  await User.findOne({ email: email }).exec();
   if(found) return 1;
   else return 0;
}

module.exports = {
    foundEmail
}


