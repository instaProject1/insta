import React, { useEffect,useContext,createContext } from 'react'
import axios from 'axios'
const User = ({token}) => {
    
    useEffect(()=>{
        axios.get(`http://127.0.0.1:3000/users/user`,{headers:{
            "Authorization":`Bearer ${token}`
        }}).then(r=>console.log('user',r,token))
        .catch(err=>console.log(err))
    },[])
  return (
    <div>User</div>
  )
}

export default User