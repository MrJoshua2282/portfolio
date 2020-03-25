import React from 'react';
import './CssIcon.scss';
import cssIcon from '../../assets/img/css3.svg';

const Icon = (props) => {
    return (
    <div className='iconContainer'>
        <img className='css' src={cssIcon} alt='react logo'></img>
        {props.children}
    </div>
    );
};

export default Icon;