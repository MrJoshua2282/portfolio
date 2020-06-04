import React from 'react';
import './ExpressIcon.scss';
import ExpressIcon from '../../assets/img/express.jpg';

const Icon = (props) => {
    return (
        <div className='iconContainer'>
            <img className='express' src={ExpressIcon} alt='express logo'></img>
            {props.children}
            <div className='language-name'>Express</div>
        </div>
    );
};

export default Icon;