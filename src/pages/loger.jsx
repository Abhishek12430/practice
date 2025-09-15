import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Loger = () => {
  const navigate = useNavigate();
const [users, setusers] = useState([])
useEffect(()=>{
    const fetchdata = async()=>{
  try{
     const response =  await axios.get('http://localhost:3000/api/user')
     setusers(response.data.data);
  }catch(error){
   console.error(error);
  }
}
  fetchdata();
},[])
const deleteUser = async(id)=>{
  try{
    const response = await axios.delete('http://localhost:3000/api/delete', { data: { id } });
   if(response.data.message){
    alert('user deleted from database');
    setusers(users.filter(user=>user.id!==id))
   }
  }catch(error){
   console.error(error);
  }
}
  return (
    <>
    <h1>All the user name</h1>
    <div>
      {
      users.map((user)=>(
        <ul key={user.id}>
          <li>id:{user.id}</li>
          <li>name :{user.name}</li>
          <li>email:{user.email}</li>
          <li>number:{user.number}</li>
          <li>subject:{user.subject}</li>
          <li>branch:{user.branch}</li>
           <li><button onClick={() => deleteUser(user.id)}>delete</button></li>
        </ul>
      ))
      }
    </div>
    <button onClick={()=>navigate('/')}>login</button>
    </>
  )
}

export default Loger