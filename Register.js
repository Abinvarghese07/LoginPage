import React from 'react';

const Register = (props) => {
    return (
         <div className='divContainer'>
                <form className='formContainer'>
                    <label htmlFor='email'>Username</label>
                
                    <input type='email' placeholder='Enter your mail' id='email' name='email'></input>
            
                    <label htmlFor='password'>Password</label>
                
                    <input type='password' placeholder='Enter password' id='password' name='password'></input>
                </form>
        </div>
    );
};

export default Register;