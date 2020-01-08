import React, { useState, useEffect } from "react";
import {axiosWithAuth}from'../utils/axiosWithAuth';
import "../index.css";

const Item = (props) => {
  const username = localStorage.getItem("username");
 
   console.log("ITEM PROPS", props)

 
   
  const deleteReview = e => {
    axiosWithAuth()
      .delete(`https://bw-foodiefun.herokuapp.com/api/items/${props.stuff.id}`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.message));
      console.log("DELETE ID", props.stuff.id)
  };


  
  return (
    <div className="item-div">
      <h1>{props.stuff.name}</h1>
      <h3>Review</h3>
      <h3>{props.stuff.id}</h3>
      <h4>
        By user{props.stuff.user} {username}
      </h4>
      <div className="review-p">
        <div className="p-div">
          <p>{props.stuff.review}</p>
          <img src={props.stuff.photo_url}></img>
        </div>

        <button onClick={deleteReview}>X</button>
      </div>
      <p></p>
    </div>
  );
};

export default Item;
