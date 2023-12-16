import React, { useState } from 'react'
import axios from 'axios'
const Register = ({register,setRegister}) => {
    const[username,setUsername]=useState('')
    const[email,setEmail]=useState('')
    const[fullname,setFullname]=useState('')
    const[password,setPassword]=useState('')
    const[added,setAdded]=useState(false)
    const add=()=>{
     
        axios.post('http://127.0.0.1:3000/users/register',{userName:username,userPassword:password,userEmail:email,fullName:fullname})
        .then(r=>{
          console.log('r',r);
          setAdded(true)
          setTimeout(()=>setRegister(!register),2000)}).catch(err=>console.log('err',err))
        
          
        
      }

  return (
    <div style={{'height': '620px','left':'40%'}} className=' border-2 border-gray-400 bg-white absolute w-72 h-auto top-16 left-1/2 text-black flex justify-center items-center gap-3'>
        <div className='w-full ml-7'>
         <img className=' w-44 -mt-20 cursor-pointer mr-7' style={{'margin-top': '1px',
      'height': '107px',
      'margin-left': '18px'}} src="https://i0.wp.com/www.dafontfree.io/wp-content/uploads/2020/12/instagram-new.png?resize=1100%2C750&ssl=1" alt="" />
      <h3 className='text-gray-400'>Sign up to see your friends' photos and videos.</h3>
      <input type="email"
      onChange={(e)=>setEmail(e.target.value)}
      required
      placeholder='Phone number,Email or Username'
      className='w-3/4 h-11 p-4 bg-button-bg text-xs mt-7'
       /><br/>
        <input type="text"
        onChange={(e)=>setFullname(e.target.value)}
      required
      placeholder='Full Name'
      className='w-3/4 h-11 p-4 bg-button-bg text-xs mt-2'
       /><br/>
        <input type="text"
        onChange={(e)=>setUsername(e.target.value)}
      required
      placeholder='Username'
      className='w-3/4 h-11 p-4 bg-button-bg text-xs mt-2'
       /><br/>
       <input type="password"
       onChange={(e)=>setPassword(e.target.value)}
       required 
       placeholder='Password'
       className='w-3/4 h-11 p-4 bg-button-bg text-xs mt-2 '/><br/>
        <h3 className='text-xs mt-5 text-gray-400'>People who use our service have been able to import your details to Instagram.<a href=''>Learn more</a> 

<br /><h3 className='text-xs text-gray-400 mt-5'>By registering, you agree to our Terms and Conditions, Privacy Policy and Cookie Policy.</h3></h3>
    <button className='bg-button text-white w-52 h-9 mt-5 ml-1 rounded cursor-default' onClick={()=>
    {  
         add()
       
        }}>Register</button>
       {added&& <div className='flex relative bg-white' style={{
            'animation-name': 'example',
            'animation-duration': '3s',
            
            'left':'0',
            'align-items': 'center',
        // 'margin-left': '-30px',
        'justify-content': 'center',
    'border': 'solid 1px gray',
    'height':' 64px',
    'box-shadow': '2px 1px 12px 1px gray',
    'width': '324px'}}>
       <img className='w-12'  src="https://static.vecteezy.com/system/resources/previews/015/304/837/original/blue-verified-tick-valid-seal-icon-in-flat-style-design-isolated-on-white-background-validation-concept-vector.jpg" alt="" />
            <h3 className='text-green'>user added successfully</h3>
            </div>}
           
    </div>
    </div>
  )
}

export default Register