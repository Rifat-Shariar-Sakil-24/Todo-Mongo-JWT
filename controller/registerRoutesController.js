const registerEmail = require('../middleware/regMiddleware');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

const maxAge = 3*24*60*60;
const createToken = function(id){
    return jwt.sign({id}, secret, {
        expiresIn: maxAge
    });
}
const register_get = function(req,res){
    res.render('register')  
}
const register_post = async function(req,res){

    //ager code 

    // try{
    //     const user = new User({
    //         email: req.body.email,
    //         password: req.body.password
    //     })
    //     await user.save();
    //     const token = createToken(user._id);
    //     res.cookie('jwt', token, {
    //         httpOnly: true,
    //         maxAge: maxAge * 1000
    //     })
    //     //console.log(user);
    //     res.status(201).json(user._id);
    // }
    // catch (error){
    //      console.log(error.message);
    //      res.status(401).send(error.message);
    // }




    // newCode
    const email = req.body.email;
    const password = req.body.password;

    const found = await registerEmail.foundEmail(email);
   
    if(found){
        res.status(401).send('email already exists');
    }
    else{

        try{
        const user = new User({
            email: req.body.email,
            password: req.body.password
        })
        await user.save();
        const token = createToken(user._id);
        res.cookie('jwt', token, {
            httpOnly: true,
            maxAge: maxAge * 1000
        })
        //console.log(user);
        res.status(201).json(user._id);
    }
    catch (error){
         res.status(401).send(error.message);
    }

    }
    
    
    
}
module.exports = {
    register_get,
    register_post
}