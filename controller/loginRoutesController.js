const { loginCheck } = require('../middleware/loginMiddleware');
const logIn = require('../middleware/loginMiddleware');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

const maxAge = 3*24*60*60;
const createToken = function(id){
    return jwt.sign({id}, secret, {
        expiresIn: maxAge
    });
}


const login_get= function(req,res){
    res.render('login');
}
const login_post = async function(req,res){
    
    // try{
    //    const user = await User.login(req.body.email,req.body.password);
    //    const token = createToken(user._id);
    //     res.cookie('jwt', token, {
    //         httpOnly: true,
    //         maxAge: maxAge * 1000
    //     })
    //     //console.log(user);
    //     res.status(201).json(user._id);
    // }
    // catch(err){
    //     res.status(401).send(err.message);
    // }




    const email = req.body.email;
    const password = req.body.password;

    try{
       const user = await loginCheck(email,password);
       const token = createToken(user._id);
        res.cookie('jwt', token, {
            httpOnly: true,
            maxAge: maxAge * 1000
        })
        //console.log(user);
        res.status(201).json(user._id);
    }
    catch(err){
        res.status(401).send(err.message);
    }

}
module.exports = {
    login_get,
    login_post
}