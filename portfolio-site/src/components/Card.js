import React from 'react';
import './Card.css';
import { useState } from 'react';
import { Flip } from 'react-reveal';

const Card = (props) => {
    const [flip, setFlip] = useState(false);

    return (
        <>

            {!flip &&

                <>
                    <Flip left duration={800}>
                        <div className={props.small ? 'cardContainer cardSmall' : 'cardContainer'} div onClick={() => setFlip(!flip)}>
                            <div text className='overflow'>
                                <img src={props.image} className='cardImage' alt={props.alt} />
                            </div>
                            <h2>{props.title}</h2>
                            {props.children}
                        </div>
                    </Flip>

                </>

            }

            {flip &&

                <>
                    <Flip right duration={800}>
                        <div className={props.small ? 'cardContainer cardSmall' : 'cardContainer'} div onClick={() => setFlip(!flip)}>
                            <h2>{props.title}</h2>
                            {props.flippedContent}
                        </div>
                    </Flip>
                </>

            }

        </>
    )
}

export default Card