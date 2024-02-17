const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;
const isAuthenticated = function(req,res,next){
    const token = req.cookies.jwt;
    

    //check jwt token is there?
    if(token){
        jwt.verify(token, secret, function(err, decodedToken){
            if(err){
                console.log(err.message);
                res.redirect('/');
            }
            else{
               // console.log(decodedToken.id);
                next();
            }
        })

    }
    else{
         res.redirect('/');
    }
}

module.exports = {
    isAuthenticated
}