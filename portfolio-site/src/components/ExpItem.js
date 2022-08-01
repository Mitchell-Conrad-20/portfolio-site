import React from 'react';
import "./ExpItem.css";
import { Fade } from 'react-reveal';

const ExpItem = (props) => {
    return (
        <>
            <div className='experienceFlex'>
                <Fade bottom delay={500} duration={1000}>
                    <div className='experienceSection'>

                        <h2>{props.title}</h2>

                        <div className='experienceTitle'>
                            <h3>{props.location}</h3>
                            <h3>{props.date}</h3>
                        </div>

                        <div className='experienceContent'>
                            {props.children}
                        </div>

                        <div className='experienceLine' />
                    </div>
                </Fade>
            </div>
        </>
    )
}

export default ExpItem;