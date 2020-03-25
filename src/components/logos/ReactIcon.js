import React from 'react';
import './ReactIcon.scss';
import reactIcon from '../../assets/img/react.svg';

const Icon = (props) => {
    return (
        <div className='iconContainer'>
            <img className='react' src={reactIcon} alt='react logo'></img>
            {props.children}
        </div>
    );
};

export default Icon;