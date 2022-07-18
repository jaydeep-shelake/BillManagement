import React,{useState} from 'react'

import '../styles/login.css'
const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
   const handleSubmit=()=>{
    
   }
  return (
    <div className='loginPage'>
     <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}  value={email}/>
      <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)} value={password}/>
      <button>Login</button>
     </form>
    </div>
  )
}

export default Login