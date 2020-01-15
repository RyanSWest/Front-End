import React from 'react';
import RegLogin from './RegLogin';
import Carousels from './Carousels';
import Nav from './Nav';
import {NavLink} from 'react-router-dom';
import '../index.css'

const HomePage = () => {

    return (
        <div className ="HomePage-div">  

             
            <h1>Foodie Fun!</h1>
            <div className='link-div'>
            <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to ="/login">Login</NavLink>
            </div>
              <Carousels />
        </div>
    )    
}

export default HomePage;