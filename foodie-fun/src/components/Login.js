import React from 'react';
import axios from 'axios';
import {useState} from 'react';
import{ axiosWithAuth} from '../utils/axiosWithAuth';
import { useHistory } from "react-router-dom";



const Login = (props)=> {

     const history = useHistory();
    console.log("PROPS" ,props)
 
      const [user, setUser] = useState( {
          username: '',
          password: ''
      });



      const handleInput =(e)=> { 
          
        setUser({
            
            ...user,
            [e.target.name]: e.target.value});


      };


      const login = (user)=> {
        //   e.preventDefault();
     
          axios.post('https://bw-foodiefun.herokuapp.com/api/users/login', user)
          .then(res=> {
              localStorage.setItem("Authorization", res.data.token

              )
               localStorage.setItem("user_id" ,res.data.id)

               localStorage.setItem("username", res.data.username)
 
          })
          .catch(err => console.log(err));

          
          console.log("USER", user)
          props.history.push('/dashboard')






      }
      
      const handleLogin = (e)=> {
          e.preventDefault();

          login(user);
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