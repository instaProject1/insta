const {connection} = require("../database/index.js");
const jwt=require('jsonwebtoken')
const JWT_KEY='bedoui123'
const add = async (req, res) => {
    const {userName,userEmail}=req.body;
  
    try {
      if (!(userName && userEmail)) {
        return res.status(400).send('Necessary fields are missing');
      }
  
      const [existingUser] = await connection.promise().query('SELECT * FROM user WHERE userEmail = ?',[userEmail]);
 
      if (existingUser.length===0) {
        await connection.promise().query('INSERT INTO user SET ?', req.body);
        return res.status(200).send('User added successfully');
      } else {
        return res.status(400).send('User already exists');
      }
    } catch (err) {
       res.status(500).send('Internal Server Error');
    }
  };
  
const get=(req,res)=>{
    connection.query(`select * from user`,(err,result)=>{
        err?res.json(err):res.json(result)
    })
}
const login=(req,res)=>{
   
    const {email,password}=req.body
    if(!(email&&password)){
       
        return res.status(400).send('u have to fill all content')
    }
    

    connection.query(`select * from user where userEmail='${req.body.email}' and userPassword=${req.body.password}`,(err,result)=>{
        if(err) return res.status(400).send('user not found')
        else if (result.length===0) return res.send('user not found')
        const token=jwt.sign({id:result[0].id},JWT_KEY,{expiresIn:'10h'})
        res.json({result,token})
        
       
         })
}

const getuser=(req,res)=>{
    connection.query(`select * from user where id=${req.id}`,(err,result)=>{
        err?res.json(err):res.json(result)
    })


    
}
module.exports={
    add,get,login,getuser
}