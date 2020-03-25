import React from 'react';
import './HtmlIcon.scss';
import htmlIcon from '../../assets/img/html5.svg';

const Icon = (props) => {
    return (
    <div className='iconContainer'>
        <img className='html' src={htmlIcon} alt='react logo'></img>
        {props.children}
    </div>
    );
};

export default Icon;