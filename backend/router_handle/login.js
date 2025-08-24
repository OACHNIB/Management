const db=require('../db/index.js')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const jwtconfig=require('../jwt_config/index.js')

exports.register=(req,res)=>{
    const reginfo=req.body;
    if(!reginfo.account||!reginfo.password){
        return res.send({
            status:1,
            message:"账号或密码不能为空"
        })
    }
    const sql='select * from users where account = ?'
    db.query(sql,reginfo.account,(err,results)=>{
        if(err) {
            console.error('数据库查询错误：', err); // 打印错误详情，方便排查
            return res.send({
                status:1,
                message:'数据库查询失败，请稍后再试'
            });
        }
        if(results.length>0){
            return res.send({
                status:1,
                message:'账号已存在'
            })
        }
        reginfo.password=bcrypt.hashSync(reginfo.password,10)
        const sql1='insert into users set ?'
        const identity='用户'
        const create_time=new Date()
        db.query(sql1,{
            account:reginfo.account,
            password:reginfo.password,
            identity,
            create_time,
            //初始未冻结
            status:0,
        },(err,results)=>{
            if(err) {
                console.error('插入用户错误：', err); // 打印错误详情，方便排查（如字段名错误、表不存在）
                return res.send({
                    status:1,
                    message:'注册失败（数据库插入错误），请稍后再试'
                });
            }
            if(results.affectedRows!==1){
                return res.send({
                    status:1,
                    message:'注册账号失败'
                })
            }
            res.send({
                status:1,
                message:'注册账号成功'
            })
        })
    })
}

exports.login=(req,res)=>{
    const loginfo=req.body
    const sql='select * from users where account =?'
    db.query(sql,loginfo.account,(err,results)=>{
        if(err)return res.cc(err)
        if(res.length!==1)return res.cc('登录失败')
        //解密密码
    const compareResult=bcrypt.compareSync(loginfo.password,results[0].password)
    if(!compareResult){
        return res.cc('登录失败')
    }
    if(results[0].status==1){
        return res.cc('账号被冻结')
    }
    const user={
        ...results[0],
        password:'',
        imageUrl:'',
        create_time:'',
        update_time:'',
    }
    const tokenStr=jwt.sign(user,jwtconfig.jwtSecretKey,{
        expiresIn:'7h'
    })
    res.send({
        results:results[0],
        status:0,
        message:'登录成功',
        token:'Bearer'+tokenStr,
    })
    })
}

