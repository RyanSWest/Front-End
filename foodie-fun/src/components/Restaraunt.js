import React from 'react';


const Restaraunt = (props)=> {

return (

    <div className = 'restaraunt-div'>
    <h2>{props.stuff.name}</h2>
    <h3>{props.stuff.city}</h3>
    <h3>{props.stuff.state}</h3>
    <h3>{props.stuff.brewery_type}</h3>



    </div>
)


}

export default Restaraunt;