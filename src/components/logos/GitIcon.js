import React from 'react';
import './GitIcon.scss';
import gitIcon from '../../assets/img/git.svg';

const Icon = (props) => {
    return (
        <div className='gitContainer'>
            <img className='git' src={gitIcon} alt='git logo'></img>
            {props.children}
        </div>
    );
};

export default Icon;