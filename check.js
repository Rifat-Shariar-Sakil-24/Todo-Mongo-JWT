const check = function(req,res,next){
    if(1==2) next();
    else {
            console.log('no entry');
    }
}
module.exports = {
    check
}