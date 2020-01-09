import React from 'react';
import axios from 'axios';
import {useState} from 'react';
import{ axiosWithAuth} from '../utils/axiosWithAuth';
import { useHistory } from "react-router-dom";



const Login = ()=> {

     
 
      const [user, setUser] = useState( {
          username: '',
          password: ''
      });



      const handleInput =(e)=> { 
          
        setUser({
            
            ...user,
            [e.target.name]: e.target.value});


      };


      const handleLogin = (e)=> {
          e.preventDefault();
          axiosWithAuth()
          .post('https://bw-foodiefun.herokuapp.com/api/user/login', user)
          .then(res=> {
              localStorage.setItem("Authorization", res.data.token)
              console.log(res.data)
            //   history.push('/dashboard')

          })
          .catch(err => console.log(err));

          console.log("USER", user)





      }


    return (
      <>

      <h1>Welcome to Foodie Fun</h1>
      <form type = 'submit'>

      <input
       type ='text'
       value ={user.username}
       name= 'username'
       onChange = {handleInput}
       placeholder = 'username'
      
      
      />
      
      <input
       type ='password'
       value ={user.password}
       name= 'password'
       onChange = {handleInput}
      placeholder = 'password'
      
      />
       
       <button type= 'submit'  onClick ={handleLogin}>Enter</button>

      </form>

          </>

    )




}

export default Login