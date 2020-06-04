import React from 'react';
import './GitIcon.scss';
import gitIcon from '../../assets/img/git.svg';

const Icon = (props) => {
    return (
        <img className='git' src={gitIcon} alt='git logo'></img>
    );
};

export default Icon;