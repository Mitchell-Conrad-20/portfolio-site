import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <>

            <div className='cardContainer'>
                <div className='overflow'>
                    <img src={props.image} className='cardImage' />
                </div>
                <h2>{props.title}</h2>
                <p>{props.children}</p>
            </div>
        </>
    )
}

export default Card