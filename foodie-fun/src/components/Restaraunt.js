import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import  '../index.css'


const Restaraunt = ({stuff, setDiners})=> {
  

     const settingDiners =()=> {
        axiosWithAuth()
        .get(`https://bw-foodiefun.herokuapp.com/api/restaurants/`)
        .then(res => setDiners(res.data))
        .catch(err => console.log(err.message))


     }
       

    const deleteItem =(id)=> {
         

         axiosWithAuth()
        .delete(`https://bw-foodiefun.herokuapp.com/api/restaurants/${id}`)
        .then(res=> console.log (res.data))
         .catch(err=> console.log(err.message))
        settingDiners() ;
        

         
    }

return (

    <div className = 'restaurant-div'key = {stuff.id}>
    <h2 className = 'place-name'>{stuff.name}</h2>
    <h3> cuisine type:  {stuff.cuisine}</h3>
    <h3> location:  {stuff.location}</h3>
    <h3>{stuff.id}</h3>
     <img className = 'image'src = {stuff.photo_url}/>

     <button onClick = {()=>deleteItem(stuff.id)}>X</button>



    </div>
)


}

export default Restaraunt;