import React from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

const RegLogin = () => {
    
    return (
        <Router>
            <div>
           <NavLink to ="/login">Login</NavLink>

           <NavLink to ='register'>Register</NavLink>
           
            </div>
        </Router>
    )
}

export default RegLogin;