import React from 'react';


const Diner = (props)=> {
 
    return (
        <>
        <h2>{props.stuff.name}</h2>
        <h2>{props.stuff.brewery_type}</h2>
        <h2>{props.stuff.state}</h2>
        </>
    )

    
}
export default Diner