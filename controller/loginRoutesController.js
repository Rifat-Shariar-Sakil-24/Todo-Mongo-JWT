const login_get= function(req,res){
    res.render('login');
}
const login_post = function(req,res){
    res.send(req.body);
}
module.exports = {
    login_get,
    login_post
}