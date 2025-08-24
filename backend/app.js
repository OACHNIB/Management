// const http=require('http');
// const port='3000';

// let app=http.createServer(function(req,res){
//     res.end('Hello World')
// })

// app.listen(3007,()=>{
//     console.log("http://127.0.0.1:3007:",port)
// })

const express=require("express");
const app=express();

app.listen(3007,()=>{
    console.log("http://127.0.0.1:3007")
})