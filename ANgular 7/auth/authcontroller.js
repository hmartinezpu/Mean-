const User = require('./authdao');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const SECRET_KEY='1234';

exports.createUser = (req, res, next)=>{
    const newUser = {
        name: req.body.name,
        email: req.body.email,
        pass: req.body.pass,
    }
    User.create(newUser,(err,user)=>{
        if (err) return res.status(500).send('errorserver');
        const expiresIn = 24*60*60;
        const accessToken = jwt.sign({id: user.id},
            SECRET_KEY,{
                expiresIn:expiresIn
            });
     //respuesta
    res.send({user});
});
}
exports.loginUser= (req, res , next) =>{

    const userData = {
        email: req.body.email,
        password: req.body.password
    }
    User.findOne({email: userData.email}, (err, user)=>{
        if (err) return res.status(500).send('Server error!');
        if (!user){
            res.status(409).send({message: ' error!'});
        }else {
            const resultpass = userData.password;
            if(resultpass){
                const expiresIn = 24*60*60;
                const accessToken = jwt.sign({id: user.id},
                 SECRET_KEY,{
                expiresIn:expiresIn
            });
            //respuesta
            res.send({user});
            }else {
                res.status(409).send({message: ' error!'}); 
            }
        }
    });


}