import React from 'react';
import './HoverBox.css';

const HoverBox = (props) => {
    return (
        <>
            <div className='hoverBox'>

                <img src={props.src} alt={props.alt}/>

                <div className='hoverBackground'/>

                <div className='hoverContent'>
                    <h2>{props.title}</h2>
                    <p>{props.desc}</p>
                    {props.content}
                </div>

            </div>
        </>
    )
}

export default HoverBox;