import React from 'react'
import './Item.css';

const Item = (props) => {
    return (
        <>
            <div className={ 
                !props.clickable ? 'item' : 'item itemClickable' }>
                <h2>{ props.title }</h2>
                <p>{ props.description }</p>
            </div>
        </>
    )
}

export default Item;