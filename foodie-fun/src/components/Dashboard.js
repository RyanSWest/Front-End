import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Restaraunt from "./Restaraunt";
import AddForm from "./AddForm";
import Review from "./Review";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Dashboard = props => {
  const history = useHistory();

  let user = localStorage.getItem("username");
   const types = ["Italian", "Asian", "BBQ", "Mexican"];

  const [diners, setDiners] = useState([]);
  const [search, setSearch] = useState([]);
  const [type, setType] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("https://bw-foodiefun.herokuapp.com/api/restaurants/")
      .then(res => setDiners(res.data))
       .catch(err => console.log(err));
  }, [type]);

  

  const submitSearch = e => {
    e.preventDefault();

    let filteredPlaces = diners.filter(e => {
      return e.name.indexOf(search) !== -1;
    });
    setDiners(filteredPlaces);
  };

  const clearSearch = e => {
    e.preventDefault();
    setSearch("");
    setType("ALL");
    axiosWithAuth()
      .get("https://bw-foodiefun.herokuapp.com/api/restaurants/")
      .then(res => setDiners(res.data))
      .catch(err => console.log(err));
  };

  const submitType = e => {
    e.preventDefault();
    setSearch("");
    const filtered = diners.filter(d => {
      if (d.cuisine === type) {
        return d;
      }  
    });
    setDiners(filtered);
   };
  return (
    <div className="dashboard">
      <h1> Welcome </h1>
      <h1>{user}</h1>
      <h1>Restaraunts</h1>

      <div className="top">
        <form type="submit" onSubmit={submitType}>
          <label htmlFor="type">
            type
            <select
              id="type"
              value={type}
              onChange={e => setType(e.target.value)}
              onBlur={submitSearch}
            >
              <option>ALL</option>
              {types.map(type => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
          <button type="submit">Enter</button>
        </form>

        <form type="submit" onSubmit={submitSearch}>
          <input
            type="text"
            value={search}
            placeholder="search"
            onChange={e => setSearch(e.target.value)}
          />
          <button type="submit">Enter</button>
          <button onClick={clearSearch}>Clear</button>
        </form>
      </div>

      <AddForm />

      {diners.map(d => {
        return (
          <>
            <Restaraunt stuff={d} setDiners={setDiners} />
          </>
        );
      })}
    </div>
  );
};

export default Dashboard;
