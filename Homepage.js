import React from 'react';
import Nike from '../assets/nike-swoosh-logo.jpeg'
import Login from './Login';
import { Navigate, useNavigate } from 'react-router-dom';

 
const Homepage = () => {

    const navigator = useNavigate()
    

    return (
        <div>
            <div className='homeHeader'>
                     <h1>CHOOSE YOUR SWOOSH</h1>
                     <img src={Nike} alt='nike'></img>
                    
                     
            </div>
            <div className='homePara'>
            <div>
                    <p>WHERE LEGACY MEETS GREATNESS</p>
                    <p>SHOP THE BEST</p>

            </div>
           
                
            </div>
            <div className='homeButton'>
                        <button>SHOP NOW</button>
                
                        <button onClick={() => navigator('login')}>LOGIN</button>
                
            </div>

           
        
   
            
        </div>




    )
        
        
};

export default Homepage;