import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './utils/privateRoute';
  import Register from './components/Register';
 import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";


function App() {



  return (
    <div className="App">

      <Router> 
      {/* <Route  path = '/login' component ={Login} /> */}
      <Route exact path = '/register' component ={Register} />


      <PrivateRoute exact path = '/dashboard'
      component ={Dashboard} />
      <PrivateRoute exact path = '/login'
      component ={Login} />
      
</Router>
      
    </div>
  );
}

export default App;
