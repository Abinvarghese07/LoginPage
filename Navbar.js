import React from 'react';
import Logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className='navContainer'>
            <nav>
                 <NavLink to='/'>Home</NavLink>
                 <NavLink to='about'>About</NavLink>
            </nav>

       

        </div>
    )

        
            
       
};

export default Navbar;