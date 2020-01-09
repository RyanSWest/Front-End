import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import "../index.css";
import Item from "./Item";
import Nav from './Nav'

const Review = props => {
   const id = props.match.params.id;
  const [place, setPlace] = useState({});
  const user = localStorage.getItem("user_id");
  const [items, setItems] = useState([]);
  const nums = [1, 2, 3, 4, 5];

  const [review, setReview] = useState({
    restaurant_id: "",
    cuisine: "",
    name: "",
    photo_url: "",
    rating: 1,
    review: "",
    user_id: parseInt(user)
  });
  
   useEffect(() => {
    axiosWithAuth()
      .get(`https://bw-foodiefun.herokuapp.com/api/restaurants/${id}`)
      .then(res => {
        setPlace(res.data);
        let resID = res.data.id
        setReview({
          ...review,
          restaurant_id: resID,
          cuisine: res.data.cuisine
        })
      })
      .catch(err => console.log(err.message));

    axiosWithAuth()
      .get(`https://bw-foodiefun.herokuapp.com/api/restaurants/${id}/items`)
      .then(res => setItems(res.data))
      .catch(err => console.log(err.message));
  }, []);

  
   

  

  const reset = () => {
    setReview({
      ...review,
      name: "",
      review: "",
      rating: parseInt(),
      user_id: parseInt(user),
      photo_url: ""
    });
  };

  const addReview = e => {
    e.preventDefault();
    console.log(review)
    console.log( "PLACE",place)
    axiosWithAuth()
      .post(`https://bw-foodiefun.herokuapp.com/api/items/`, review)
      .then(res => setItems([...items, res.data]))
      .catch(err => console.log(err.message));

    reset();
  };

  console.log("ITEMS", items);
  return (
    <div className="Review">
      <Nav/>
      <h1>Review</h1>
      <h1 className= 'review-name'>{place.name}</h1>
      
      <form className="review-form" type="submit" onSubmit={addReview}>
        <div className="rating-top">
          <input
            type="text"
            name="name"
            placeholder="item_name"
            value={review.name}
            onChange={e => setReview({ ...review, name: e.target.value })}
          />

          <input
            type="text"
            name="photo_url"
            placeholder="photo_url"
            value={review.photo_url}
            onChange={e => setReview({ ...review, photo_url: e.target.value })}
          />

          <label htmlFor="rating">
            rating
            <select
              id="rating"
              value={review.rating}
              onChange={e =>
                setReview({ ...review, rating: parseInt(e.target.value) })
              }
              onBlur={e =>
                setReview({ ...review, rating: parseInt(e.target.value) })
              }
            >
              {nums.map(num => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </label>
        </div>

        <textarea
          rows="4"
          cols="50"
          className="review-box"
          name="name"
          placeholder="write a review"
          value={review.review}
          onChange={e => setReview({ ...review, review: e.target.value })}
        />
        <button type="submit">ENTER</button>
      </form>
      {items.map(i => {
        return (
          <>
            <Item stuff={i} user={user} id={id} />
          </>
        );
      })}
    </div>
  );
};
export default Review;
