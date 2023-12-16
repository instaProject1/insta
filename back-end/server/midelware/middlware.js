const jwt =require('jsonwebtoken')
const JWT_KEY='bedoui123'
const verifytoken=(req,res,next)=>{
    const token= req.headers['authorization'].split(' ')[1]
      if(!token){
         return  res.json('token not found')
      }
      jwt.verify(String(token),JWT_KEY,(err,user)=>{
          req.id=user.id
      })
      next()
  }
 module.exports={verifytoken}