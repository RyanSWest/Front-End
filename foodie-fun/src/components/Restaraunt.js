import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import PrivateRoute from "../utils/privateRoute";
import Review from "./Review";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "../index.css";

const Restaraunt = ({ stuff, setDiners }) => {
  const history = useHistory();
  const user = localStorage.getItem("user_id");
  const initialDiner = {
    name: "",
    cuisine: "",
    location: "",
    hour_open: " ",
    hour_closed: "",
    days_open: "",
    user_id: parseInt(user),
    photo_url: ""
  };

  const [editing, setEditing] = useState(false);
  

  const [dinerEdit, setDinerEdit] = useState(initialDiner);

  const settingDiners = () => {
    axiosWithAuth()
      .get(`https://bw-foodiefun.herokuapp.com/api/restaurants/`)
      .then(res => setDiners(res.data))
      .catch(err => console.log(err.message));
  };

  const deleteItem = id => {
    axiosWithAuth()
      .delete(`https://bw-foodiefun.herokuapp.com/api/restaurants/${id}`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.message));
    settingDiners();
  };

  const editItem = id => {
    axiosWithAuth()
      .put(
        `https://bw-foodiefun.herokuapp.com/api/restaurants/${id}`,
        dinerEdit
      )
      .then(res => console.log(res.data))
      .catch(err => console.log(err.message));
    settingDiners();
  };

  const saveEdit = e => {
    e.preventDefault();
    editItem(stuff.id);
    setEditing(false);
    settingDiners();
  };

  return (
    <div className="restaurant-div" key={stuff.id}>
      <h2 className="place-name">{stuff.name}</h2>
      <h3> cuisine type: {stuff.cuisine}</h3>
      <h3> location: {stuff.location}</h3>
      <h3>{stuff.id}</h3>
      <img className="image" src={stuff.photo_url} />

      <Link to={`/reviews/${stuff.id}`}>View Review</Link>

      <button onClick={() => deleteItem(stuff.id)}>X</button>
 
      <button onClick={setEditing}>EDIT</button>

      {editing && (
        <form className="edit-form" type="submit" onSubmit={saveEdit}>
          <legend>edit restaurant</legend>
          <input
            name="name"
            placeholder="name"
            value={dinerEdit.name}
            onChange={e => setDinerEdit({ ...stuff, name: e.target.value })}
          />
          <input
            name="cuisine"
            placeholder="cuisine"
            value={dinerEdit.cuisine}
            onChange={e => setDinerEdit({ ...stuff, cuisine: e.target.value })}
          />
          <input
            name="location"
            placeholder="location"
            value={dinerEdit.location}
            onChange={e => setDinerEdit({ ...stuff, location: e.target.value })}
          />
          <input
            type="number"
            name="hour_open"
            placeholder="hour_open"
            value={dinerEdit.hour_open}
            onChange={e =>
              setDinerEdit({ ...stuff, hour_open: parseInt(e.target.value) })
            }
          />

          <input
            type="number"
            name="hour_closed"
            placeholder="hour_closed"
            value={dinerEdit.hour_closed}
            onChange={e =>
              setDinerEdit({ ...stuff, hour_closed: parseInt(e.target.value) })
            }
          />
          <input
            type="text"
            name="days_open"
            placeholder="days_open"
            value={dinerEdit.days_open}
            onChange={e => setDinerEdit({ ...stuff, days_open: e.target })}
          />

          <input
            type="text"
            name="photo_url"
            placeholder="photo_url"
            vlaue={dinerEdit.photo_url}
            onChange={e =>
              setDinerEdit({ ...stuff, photo_url: e.target.value })
            }
          />

           <button type="submit">ENTER</button>
          <button onClick={() => setEditing(false)}>Cancel</button>
        </form>
      )}

      
    </div>
  );
};

export default Restaraunt;
