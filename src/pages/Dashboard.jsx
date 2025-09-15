import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Dashboard = () => {
  const navigate = useNavigate()
const [userdata, setuserdata] = useState(JSON.parse(localStorage.getItem('user')))
     const logout =()=>{
      localStorage.removeItem('user');
      setuserdata([]);
     navigate('/');
     }
  return (
    <>
  <div>
    {<div>
     <h2>{userdata.name}</h2>
     <h2>{userdata.email}</h2>
     <h2>{userdata.number}</h2>
     <h2>{userdata.subject}</h2>
     <h2>{userdata.branch}</h2>
     </div>
    }
  </div>
  <button onClick={logout}>logout</button>
    </>
  )
}

export default Dashboard