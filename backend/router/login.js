const express=require('express')
const Joi=require('joi')

const router=express.Router();
const loginHandler=require('../router_handle/login')
const {
    login_limit
}=require('../limit/login.js');
const expressJoi = require('@escook/express-joi');

router.post('/register',expressJoi(login_limit),loginHandler.register)
router.post('/login',expressJoi(login_limit),loginHandler.login)

module.exports=router;