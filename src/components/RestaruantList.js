import React, { useEffect, useState } from "react";
import Axios from "axios";
import styled from "styled-components";

const RestaurantImg = styled.img`
    width: 45%;
    height: 45%;
    margin: 0 auto; 
    border-radius: 10px;
`;

const RestaurantInfoDiv = styled.div`
    width: 45%;
    margin: 0 auto;
`;

const RestaurantLi = styled.li`
    text-align: left;
`;

const RestaurntParagraphContainer = styled.div`
    text-align:left;
    width: 45%;
    margin: 0 auto;
`;

const RestaurantCardContainer = styled.div`
    margin-top: 5%;
    margin-bottom: 5%;
    border-bottom: 1px solid grey;
`;


const fakeData = [{
    id: 1,
    name: "Noelio's",
    cuisine: "Italian",
    location: "Malibu",
    hour_open: "5 PM",
    hour_closed: "10 PM",
    days_open: "Thursday, Friday, Saturday, Sunday",
    user_id: 1,
    photo_url: "https://img1.10bestmedia.com/Images/Photos/355409/mia-s_54_990x660.jpg",
    reviews: [
        "Great pizza, service was subpar. ",
        "We enjoyed the breadsticks! "
    ],
    rating: "4 stars"
},
{
    id: 2,
    name: "Christine's Bakery",
    cuisine: "French",
    location: "Beverly Hills",
    hour_open: "7 AM",
    hour_closed: "3 PM",
    days_open: "Friday, Saturday, Sunday",
    user_id: 1,
    photo_url: "https://lavenderbakeries.com/wp-content/uploads/2019/02/IMG_5474.jpg",
    reviews: [
        "Authentic French baking at its finest! ",
        "10/10 would eat those cream puffs again...mmm "
    ],
    rating: "5 stars"
}]


function RestaurantList(props) {
    const [responseData, setResponseData] = useState([]);
    useEffect(() => {
        Axios.get("https://bw-foodiefun.herokuapp.com/api/restaurants", props.user)
            .then(response => {
                //BACKEND BROKEN - GET REQUEST 401 ERROR EVEN WITH AUTHORIZATION! 
                //USING SAMPLE DATA ABOVE INSTEAD!
                //console.log('props.user', props.user);
                //console.log("get request response", response);
                //console.log('response data', response.data)
                response.data = fakeData;
                setResponseData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [props.user]);
    return (
        <div>
            <h2> Restaurants to Review: </h2>
            {responseData.map(place => {
                return (
                    <RestaurantCardContainer key={place.id}>
                        <RestaurantImg src={place.photo_url} />
                        <h3>{place.name}</h3>
                        <RestaurantInfoDiv>
                            <ul>
                                <RestaurantLi>Cuisine: {place.cuisine}</RestaurantLi>
                                <RestaurantLi>Location: {place.location}</RestaurantLi>
                                <RestaurantLi>Open: {place.hour_open}, Closed: {place.hour_closed}</RestaurantLi>
                                <RestaurantLi>Days Open:{place.days_open}</RestaurantLi>
                            </ul>
                        </RestaurantInfoDiv>
                        <RestaurntParagraphContainer>
                            <p>Reviews: {place.reviews}</p>
                        </RestaurntParagraphContainer>
                    </RestaurantCardContainer>
                );
            })}
        </div>
    )

}

export default RestaurantList;