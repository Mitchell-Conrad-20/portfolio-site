import React from 'react';
import './Arrow.css';

const Arrow= (props) => {
    return (
        <div className='arrow'>
            <i className={ `${ props.type }` + ' arrowI' } aria-hidden="true"></i>
        </div>
    )
}

export default Arrow;