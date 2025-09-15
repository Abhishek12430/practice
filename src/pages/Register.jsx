import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Register = () => {
const [name, setname] = useState('');
const [email,setemail] = useState('');
const [number,setnumber] = useState('');
const[subject,setsubject] = useState('');
const [branch,setbranch] = useState('');
const[password,setpassword] = useState(''); 

const navigate = useNavigate()
const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
     const response = await axios.post('http://localhost:3000/api/register',{
        name,
        email,
        number,
        subject,
        branch,
        password
     
     })
      if(response.data.message){
        alert(response.data.message)
      }
      setemail('');
      setname('');
      setnumber('');
      setsubject('');
      setsubject('');
      setpassword('');
    }catch(error){
      console.error(error);
    }
}
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder='enter name '/>
        <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder='enter email '/>
        <input type="number" value={number} onChange={(e)=>setnumber(e.target.value)} placeholder='enter number'/>
        <input type="subject" value={subject} onChange={(e)=>setsubject(e.target.value)} placeholder='enter subject '/>
        <input type="text" value={branch} onChange={(e)=>setbranch(e.target.value)} placeholder='enter branch'/>
        <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='enter password'/>
        <button type='submit'>Register</button>
    </form>
    <button onClick={()=>navigate('/')}>login</button>
    <button onClick={()=>navigate('/loger')}>loger</button>

    </>
  )
}

export default Register