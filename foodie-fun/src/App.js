  
  
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./utils/privateRoute";
import Register from "./components/Register";
import Review from "./components/Review";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import HomePage from './components/HomePage';
import Restaraunt from "./components/Restaraunt";
 
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path ='/' component={HomePage}/>
         <Route exact path="/register" component={Register} />

        <PrivateRoute path="/dashboard" component={Dashboard} />

        <Route exact path="/login" component={Login} />

        <PrivateRoute exact path="/reviews/:id" component={Review} />

       </Router>
    </div>
   );
}

export default App;
