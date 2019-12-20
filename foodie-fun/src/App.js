import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './utils/privateRoute';
import SearchBar from './components/SearchBar';


function App() {



  return (
    <div className="App">
      


      {/* <Login/>
      <Dashboard/> */}
      <SearchBar/>
    </div>
  );
}

export default App;
