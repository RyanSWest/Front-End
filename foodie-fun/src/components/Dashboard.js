import React, { useState, useEffect } from "react";
import axios from 'axios';
  import {axiosWithAuth} from '../utils/axiosWithAuth';
  import Restaraunt from './Restaraunt';
  import {useHistory} from 'react-router-dom';


const Dashboard = ()=> {
  
  const history = useHistory();

  let user = localStorage.getItem('user')
  console.log("USER", user)
   
  const [diners, setDiners]= useState([]);
  const [search, setSearch]= useState( {
      searchItem: ' '
  });

   useEffect (()=> {
    axiosWithAuth()
    .get('https://api.openbrewerydb.org/breweries')
    // .then(res=> console.log("RES1", res.data))
    .then(res => setDiners(res.data))
    // .then(console.log( "DINERS",diners))
    .catch(err=> console.log (err))

       



   }, [])

   console.log("DINERS HERE",diners)

   //Search stuff ///

   const onChange =(e)=> {
       setSearch({
           searchItem: e.target.value

       })
   }

   let filteredPlaces = diners.filter (
       e=> {
           return e.name.indexOf(search)!== -1;
       }
   )
   

   const updateSearch=(e)=>{
       e.preventDefault();
       setSearch({searchItem: e.target.value})

       console.log("SEARCH",search)

   }
    return (
         <div>
       <h1> Welcome {user} </h1>
         <div className = 'top'> 
         <h1>Restaraunts</h1>

         <form type ='submit' onSubmit ={updateSearch}> 
         <input 
         type= 'text'
         className = 'searchbar'
         placeholder = 'Search'
         value ={search.searchItem}
         onChange={onChange}

         />
         <button type = 'submit'>ENTER</button>
</form>

         </div>

       
         {diners.map(d => {
             return(

                <Restaraunt stuff = {d}/>
             )
         })}



        </div>
    )
}

export default Dashboard;