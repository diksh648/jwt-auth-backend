import './App.css'
import {useState} from 'react'

async function sendSignupData(name, email, password) {
  try {
    const response = await fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();
    console.log(data.message);
  } catch (error) {
    console.error('Error signing up:', error);
  }
}


function Signup() {
const[name,setName]=useState("")
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
  return (
    <>
    
    <section className="signuppage">
   <h2 style={{ backgroundColor: "#4110ab" }}>signup page</h2>
   <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
   <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
   <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
    <button onClick={() => sendSignupData(name, email, password)}>Sign Up</button>
  </section>
 </>
  )
}
export default Signup;