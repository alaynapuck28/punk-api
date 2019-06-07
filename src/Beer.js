import React from 'react';
function Beer (props){
    return (
        <div className='beer'>
            <h1>{props.name}</h1>
            <img src={props.image}/>
            <button onClick={()=>props.like(props.id)}>Like</button>
        </div>
    )

}

export default Beer;