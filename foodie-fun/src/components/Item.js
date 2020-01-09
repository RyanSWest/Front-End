import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";
import "../index.css";

const Item = props => {
  const username = localStorage.getItem("username");
  const user = localStorage.getItem("user_id");
  const nums = [1, 2, 3, 4, 5];
 

  const initialReview = {};

  const [editing, setEditing] = useState(false);
  const [reviewEdit, setReviewEdit] = useState({
    restaurant_id: 34,
    cuisine: "Asian",
    name: "",
    photo_url: "",
    rating: parseInt(),
    review: "",
    user_id: parseInt(user)
  });

   
  

  const deleteReview = e => {
    axiosWithAuth()
      .delete(`https://bw-foodiefun.herokuapp.com/api/items/${props.stuff.id}`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.message));
  };

  const submitEdit = e => {
      e.preventDefault()
      axiosWithAuth()
      .put(`https://bw-foodiefun.herokuapp.com/api/items/${props.stuff.id}`,reviewEdit)
      .then(res => console.log(res.data))
      .catch(err=> console.log(err.message))
      setEditing(false)
  }

  return (
    <div className="item-div">
        <div className = 'item-top'>
        <h1>{props.stuff.name}</h1>
      <h3>Review</h3>
      <h3>{props.stuff.rating} stars</h3>
      <h4>
        By user{props.stuff.user} {username}
      </h4>
        </div>
     
      <div className="review-p">
        <div className="p-div">
          <p>{props.stuff.review}</p>
          <img src={props.stuff.photo_url}></img>
          
        <button onClick={deleteReview}>DELETE X</button>
        
        <button onClick={setEditing}>EDIT ITEM</button>
        </div>

         
      </div>

      {editing && (
        <form type="submit"
        className ="edit-item-form"
          onSubmit = {submitEdit}>
          
           <input
            type="text"
            placeholder="photo_url"
            value={reviewEdit.photo_url}
            onChange={e =>
              setReviewEdit({ ...props.stuff, photo_url: e.target.value })
            }
          />
          <label htmlFor="rating">
            rating
            <select
              id="rating"
              value={reviewEdit.rating}
              onChange={e =>
                setReviewEdit({ ...props.stuff, rating: parseInt(e.target.value) })
              }
              onBlur={e =>
                setReviewEdit({ ...props.stuff, rating: parseInt(e.target.value) })
              }
            >
              {nums.map(num => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </label>
          <textarea
           rows="4"
           cos="50"
           placeholder="edit review"
           value={reviewEdit.review}
           onChange={e=> setReviewEdit({...props.stuff,review:e.target.value})}
           
           />
           <button type = 'submit'>ENTER</button>
           <button onClick={()=>setEditing(false)}>Cancel</button>
        </form>
      )}
    </div>
  );
};

export default Item;
