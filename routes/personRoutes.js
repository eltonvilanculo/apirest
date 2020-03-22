const express = require('express')
const connection =  require('../controller/Connection')
const users  =  require('../controller/Controller')
require('dotenv').config()

const Routes = express.Router()

Routes.get('/all',function(req,res){

   users.All_USERS(connection,res)
   })


Routes.get('/single',function(req,res){

users.SINGLE_USER(connection,req,res)
})

Routes.post('/add/newone',(req,res)=>{

    users.STORE_USER(connection,req,res)
})
// Routes.get('/all',function(req,res){
//     res.send('YOu');
// })

// Routes.get('/me',(req,res)=>{
//     res.send('me');
// })

// Routes.post('/', (req , res,next)=>{

// res.status(201).send(req.body)


// })

module.exports =  Routes ; 