import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Review = props => {
  console.log("REVIEW", props.match.params.id);
  const id = props.match.params.id;
  const [place, setPlace] = useState({});

  useEffect(() => {
    axiosWithAuth()
      .get(`https://bw-foodiefun.herokuapp.com/api/restaurants/${id}`)
      .then(res => {
        setPlace(res.data);
       })
      .catch(err => console.log(err.message));
  }, []);
  return (
    <div>
      <h1>Review{place.name}</h1>
      <h2>{place.name}</h2>
      <p>{place.id}</p>
    </div>
  );
};
export default Review;
