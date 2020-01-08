import React, {useState, useEffect} from 'react';



const Item = ( {stuff, user})=> {

const username = localStorage.getItem('username')


    return (

        <div className = 'item-div'>

            <h1>{stuff.name}</h1>
            <div className = 'review-p'>
                <h3>Review</h3>
                <h4>By user{user} {username}</h4>
                <div className = 'p-div'>
                    {stuff.review}


                </div>
                <div className='item-photo-div'>
                    <img src = {stuff.photo_url}></img>
                </div>


            </div>
            <p></p>
        </div>
    )
}

export default Item;