import React from 'react'
import './Item.css';
import { Bounce, Fade } from 'react-reveal';

const Item = (props) => {
    return (
        <>
            <div className={ 
                !props.clickable ? 'item ' + props.className : 'item itemClickable ' + props.className 
                }>
                {/* <Fade delay={500} duration={1000}> */}
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                {/* </Fade> */}
            </div>
        </>
    )
}

export default Item;