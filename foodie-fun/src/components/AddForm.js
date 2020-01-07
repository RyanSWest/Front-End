import React , {useState, useEffect}from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

const AddDiner = ()=> {

     const user = localStorage.getItem('user_id');

     console.log("USER FROM ADD FORM", user)

    const [diners, setDiners]= useState([]);

     const [restaurant, setRestaurant]= useState({
         name: '',
         cuisine: '',
         location:'',
         hour_open: ' ' ,
         hour_closed: '',
         days_open:'',
         user_id:  parseInt(user),
         photo_url:''

     })


     const onSubmit = (e)=> {
         e.preventDefault();

         axiosWithAuth()
         .post('https://bw-foodiefun.herokuapp.com/api/restaurants/',restaurant)
         .then(res=> console.log(res.data))
         .catch(err=> console.log(err))
         console.log("RESTAURANT", restaurant)

         setDiners(...diners, restaurant)
         console.log("DINERS FROM ADD FORM", diners)





     }
    return (

     <div>
      <form  class= 'add-form' type = 'submit' onSubmit = {onSubmit}>

          <input
          type= 'text'
          name = 'name'
          placeholder='name'
          value = {restaurant.name}
          onChange = { e =>setRestaurant ({...restaurant, name: e.target.value})}
          
          
          
          />
            <input
          type= 'text'
          name = 'cuisine'
          placeholder='cuisine'
          value = {restaurant.cuisine}
          onChange = { e =>setRestaurant ({...restaurant, cuisine: e.target.value})}
          
          
          
          />
            <input
          type= 'text'
          name = 'location'
          placeholder='location'
          value ={restaurant.location}
          onChange = { e =>setRestaurant ({...restaurant, location: e.target.value})}
          
          
          
          />
            <input
          type= 'number'
          name = 'hour_open'
          placeholder='hour_open'
          value ={restaurant.hour_open}
          onChange = { e =>setRestaurant ({...restaurant, hour_open: parseInt( e.target.value)})}
          
          
          
          />
            <input
          type= 'number'
          name = 'hour_closed'
          placeholder='hour_closed'
          value ={restaurant.hour_closed}
          onChange = { e =>setRestaurant ({...restaurant, hour_closed:  parseInt (e.target.value)})}
          
          
          
          />
            <input
          type= 'text'
          name = 'days_open'
          placeholder='days_open'
          value ={restaurant.days_open}
          onChange = { e =>setRestaurant ({...restaurant,days_open: e.target.value})}
          
          
          
          />

 
            <input
          type= 'text'
          name = 'photo_url'
          placeholder='photo_url'
          value ={restaurant.photo_url}
          onChange = { e =>setRestaurant ({...restaurant, photo_url: e.target.value})}
          
          
          
          />

        <button type='submit'>ADD RESTAURANT</button>

      </form>



     </div>

    )







}

export default AddDiner