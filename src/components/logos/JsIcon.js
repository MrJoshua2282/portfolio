import React from 'react';
import './JsIcon.scss';
import jsIcon from '../../assets/img/js.svg';

const Icon = (props) => {
    return (
    <div className='iconContainer'>
        <img className='js' src={jsIcon} alt='react logo'></img>
        {props.children}
    </div>
    );
};

export default Icon;