import React from 'react'
import './Item.css';

const Item = (props) => {
    return (
        <>
            <div className='item'>
                <h1>{ props.title }</h1>
                <p>{ props.description }</p>
            </div>
        </>
    )
}

export default Item;