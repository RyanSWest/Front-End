import React, {useState} from 'react';
import axios from 'axios';

import {axiosWithAuth} from "../utils/axiosWithAuth";

const Register =(props)=> {
  
    const [userData, setUserData ] = useState({
        username: '',
        password: '',
        location: '',
        email: '',
    
     });


      console.log("REG PROPS", props)
    const handleInput =(e)=> { 
          
        setUserData({
            
            ...userData,
            [e.target.name]: e.target.value});


      };

      const onSubmit = (e)=> {
          e.preventDefault();
          axios 
          .post('https://bw-foodiefun.herokuapp.com/api/users/register', userData)
          .then(res=> {localStorage.setItem('token', res.data.token )} )
           .catch(err=> console.log(err))
          console.log("REG", userData)
          props.history.push('/dashboard')
      }

    return (

        <>
         <h1>Register</h1>
        <form type = 'submit' onSubmit = {onSubmit}>

            <input
            type ='text' 
            name ='username'
             onChange = {handleInput}
             value = {userData.username}
             placeholder= 'username'
             
             
             /> 
              <input
       type ='password'
       value ={userData.password}
       name= 'password'
       onChange = {handleInput}
      placeholder = 'password'
      
      />

      
<input
            type ='text' 
            name ='location'
             onChange = {handleInput}
             value = {userData.location}
             placeholder= 'location'
             
             
             /> 
             <input
            type ='text' 
            name ='email'
             onChange = {handleInput}
             value = {userData.email}
             placeholder= 'email'
             
             
             /> 
      <button type = 'submit' onSubmit ={onSubmit}>ENTER</button>
        </form>
        </>


    )
}

export default Register