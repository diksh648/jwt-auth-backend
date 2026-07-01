import { useState } from 'react'
import './App.css'
import { Routes, Route,Link } from 'react-router-dom'
import Signup from './signup.jsx'
function sendloginData(username, password) {
  // Implement your login logic here
  try{
    const response = fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const data = response.json();
    console.log(data.message);
  } catch (error) {
    console.error('Error logging in:', error);
  }
}


function Login() {
  
  return (
    <>
     
    <section className="loginpage  ">
   <h2 className='title'>login</h2>
    <input type="text" placeholder="username"  />
    <input type="password" placeholder="password" />
    <button onClick={()=>sendloginData("username", "password")}>login</button>
    <h6>Don't have an account? <Link to="/signup">Sign up</Link></h6>
    



     
</section>
    </>
  )
}
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}

export default App