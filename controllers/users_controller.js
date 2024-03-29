const User = require('../models/user')

module.exports.profile = function(req, res){
    return res.render('user_profile', {
        title: 'User Profile'
    })
}

///render the signup page
module.exports.signUp=function(req,res){
    return res.render('user_signUp',{
        title: "Codeal  | SignUp"
    })
}

///render the signup page
module.exports.signIn=function(req,res){
    return res.render('user_signIn',{
        title: "Codeal  | SignIn"
    })
}

///get the signup data
module.exports.create=function(req,res){
   if (req.body.password!=req.body.confirm_password){
    return res.redirect('back');
   }

   User.findOne({email:req.body.email},function(err,user){
    if(err){console.log('error in finding user in signing up');return}

    if(!user){
        User.create(req.body,function(err,user){
            if(err){console.log('error in creating user while signing up');return}
           return res.redirect('/users/sign-in') 
    })
   }
   else{
    return res.redirect('back');
   }
});
}
///get the session started
module.exports.createSession=function(req,user){
    // toDo
    
 }