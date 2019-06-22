const Users = require ('./authcontroller');
module.exports = (router)=>{
    router.post('/register', Users.createUser);
    router.post('/login', Users.loginUser);
}