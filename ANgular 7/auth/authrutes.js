const Users = require ('../Controladores/authcontroller');
var express = require('express');

module.exports = (router)=>{
    router.post('/register', Users.createUser);
    router.post('/login', Users.loginUser);
   router.get('/todos',Users.todosGet);
}