// const http=require('http');
// const port='3000';

// let app=http.createServer(function(req,res){
//     res.end('Hello World')
// })

// app.listen(3007,()=>{
//     console.log("http://127.0.0.1:3007:",port)
// })

const express=require('express');
const app=express();
const cors=require('cors');
const bodyParser=require('body-parser');


app.use(cors());
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use((req,res,next)=>{
    //stauts成功为0，失败为1
    res.cc=(err,status=1)=>{
        res.send({
            status,
            //判断这个error是错误对象还是字符串
            message:err instanceof Error ? err.message:err,
        })
    }
    next()
})

const jwtconfig=require('./jwt_config/index.js')
//解构赋值+冒号后面重命名
const {expressjwt:jwt}=require('express-jwt')
app.use(jwt({
    secret:jwtconfig.jwtSecretKey,algorithms:['HS256']
}).unless({
    path:[/^\/api\//]
}))

const loginRouter=require('./router/login')
const Joi=require('joi')
app.use('/api',loginRouter);

app.use((err,req,res,next)=>{
    if(err instanceof Joi.ValidationError)return res.cc(err)
})

app.listen(3007,()=>{
    console.log("http://127.0.0.1:3007")
})