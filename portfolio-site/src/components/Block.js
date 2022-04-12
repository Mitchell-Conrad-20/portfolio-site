import React from 'react';
import './Block.css';

const Block = (props) => {
    return (
        <div className='block'>
            <div className='blockI'>
                <i className={props.icon} aria-hidden={true}></i>
            </div>
            <div className='blockText'>
                <h2>{props.title}</h2>
                {props.children}
            </div>
        </div>
    )
}

export default Block