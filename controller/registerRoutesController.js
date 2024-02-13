const User = require('../models/User');


const register_get = function(req,res){
    res.render('register')  
}
const register_post = async function(req,res){

    try{
        const user = new User({
            email: req.body.username,
            password: req.body.password
        })
        await user.save();
        res.status(201).json(user);
    }
    catch (error){
         res.status(401).send(error.message);
    }
    
    
}
module.exports = {
    register_get,
    register_post
}