import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-div">
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to ="/login">Login</NavLink>

      
      <NavLink to ="/register">Register</NavLink>
    </div>
  );
};


export default Nav
