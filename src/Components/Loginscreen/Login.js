import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import { ReactComponent as Moblogin } from '../assests/Mobile login-pana 1.svg'
import { ReactComponent as Network } from '../assests/Group 1.svg';
import { ReactComponent as Email } from '../assests/Group 4.svg';
import { ReactComponent as Password } from '../assests/Rectangle 10.svg';
import { ReactComponent as Splint } from '../assests/Frame.svg';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('');
  const navigate=useNavigate();
  useEffect(() => {
    if(localStorage.getItem('user-info')){
      navigate("/")
    }
  }, [])
  
  
      const handlesubmit= async(e)=>{
    e.preventDefault();
    console.warn(username,password)
    let item ={username,password};
      let result =  await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json','Accept':'application/json' },
      body: JSON.stringify(item),
    });
    let vicky = await result.json()
   
    if (result.ok) {
      navigate("/nav")
      localStorage.setItem("user-info",JSON.stringify(result))
      console.log(result.status)
      
    } else {
      setError("Invalid credentilals")
      
    }
    
    

  }

  


  return (
    <div className='cover'>
      <form>
        <div className="container">
          <div className="firstbox">
            <Network className='network' />
            <p className='logac'>Login to your account</p>

            <div className="element">
              <label htmlFor="text">Username</label><br />
              <input type="text" id="email" name="email" className='input' placeholder='alex@email.com' onChange={(e)=>setUsername(e.target.value)} /><Email className='email' /><br />
              {/* <p style={{ color: 'red', marginTop: '-5px' }}>{emailerror}</p> */}
              <label htmlFor="text">Password</label><br />
              <input type="password" id="password" name="password" className='input' placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value)} /><Password className='password' /><Splint className='splint' /><br />
              {/* <button className='forget'>Forget password ?</button> */}
            </div>
            
            <div><button className="loginbtn" onClick={handlesubmit}>Login now</button></div>
                       {error && <div className='error'>{error}</div>}

            {/* <div className="or"><hr className='line1'/><p>OR</p><hr className='line2'/></div>
        
        <div><button  className="signupbtn" >Signup now</button></div> */}
          </div>
          <div className="secondbox">
            <Moblogin className='moblogin' />
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login