import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
const [email, setemail] = useState('');
const [password,setpassword] = useState('');
const navigate = useNavigate();
const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
   const response = await axios.post('http://localhost:3000/api/login', { email, password });
   if(response.data.user){
  localStorage.setItem('user', JSON.stringify(response.data.user));
  alert('Login successful');
  navigate('/dashboard');
}
       
setemail('');
setpassword('');
       
    }catch(error){
        console.error(error)
    }
}
  return (
    <>
    <form action="" onSubmit={handleSubmit}>
        <input type="email" placeholder='enter email' value={email}  onChange={(e)=>setemail(e.target.value)}/>
        <input type="password" placeholder='enter password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
        <button type='submit'>Login</button>
    </form>
    <button onClick={()=>navigate('/register')}>Register</button>
    <button onClick={()=>navigate('/loger')}>loger</button>

    
    </>
  )
}

export default Login