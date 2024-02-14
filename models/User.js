const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }

  });

  // before saving to db
  userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
  })

  // static method to login user
  userSchema.statics.login = async function(email,password){
    const user = await this.findOne({email});
    if(user){
         const auth = await bcrypt.compare(password,user.password);
         if(auth){
            return user;
         }
         throw Error("Incorrect password");
    }
    throw Error('incorrect mail');
  }

const User = mongoose.model('User', userSchema);


module.exports = User ;