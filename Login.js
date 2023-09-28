import React from 'react';
import { useState } from 'react';
import Register from './Register';

const Login = (props) => {
    const[email,setEmail] = useState('')
    const[pass,setPass] = useState('')

    const handleSubit = (e) =>{
        e.preventDefault()
        console.log(email)
        console.log(pass)

    }



    return (
        <div className='divContainer'>
        <form className='formContainer'>
            <label htmlFor='email'>Username</label>
         
            <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Enter your mail' id='email' name='email'></input>
      
             <label htmlFor='password'>Password</label>
        
            <input value={pass} onChange={(e) => setPass(e.target.value)} type='password' placeholder='Enter password' id='password' name='password'></input>
        </form>
            <div className='loginButton'>
                <button type='submit' onClick={handleSubit}>Login</button>
                <button>Dont have an account? Register</button>

            </div>
        </div>
           

         
       
           
      
        
       


    
    );
};

export default Login;