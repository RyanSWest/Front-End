import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Carousels = () => {

    return (
        <Carousel className='carousel'>
            <div className='foodpic'>
                <img src='https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/buffalo-wings.jpg' />
                <p className='foodpic'>Yummy Chicken!</p>
                <img src='https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AABHnbv.img?h=552&w=750&m=6&q=60&u=t&o=f&l=f&x=1163&y=707' />
                <p className='foodpic'>Yummy Burger!</p>
                <img src='https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/11/9/0/FNK_Italian-Meatballs_s4x3.jpg.rend.hgtvcom.406.305.suffix/1510259145895.jpeg' />
                <p className='foodpic'>Yummy Spaghetti!</p>
            </div>
        </Carousel>
    )
}

export default Carousels;