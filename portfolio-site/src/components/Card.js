import React from 'react';
import './Card.css';
import { useState } from 'react';
import { Flip, Fade } from 'react-reveal';

const Card = (props) => {
    const [flip, setFlip] = useState(false);

    return (
        <>
            <div className='cardContainer' div onClick={() => setFlip(!flip)}>

                {!flip &&

                    <>
                        <Flip left duration={1000}>
                            <Fade duration={500}>
                                <div text className='overflow'>
                                    <img src={props.image} className='cardImage' />
                                </div>
                                <h2>{props.title}</h2>
                                {props.children}
                            </Fade>
                        </Flip>

                    </>

                }

                {flip &&

                    <>
                        <Flip right duration={1000}>
                            <Fade duration={500}>
                                <h2>{props.title}</h2>
                                { props.flippedContent }
                            </Fade>
                        </Flip>
                    </>

                }


            </div>
        </>
    )
}

export default Card