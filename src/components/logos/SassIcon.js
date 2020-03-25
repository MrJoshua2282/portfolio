import React from 'react';
import './SassIcon.scss';
import sassIcon from '../../assets/img/sass.svg';

const Icon = (props) => {
    return (
        <div className='iconContainer'>
            <img className='sass' src={sassIcon} alt='sass logo'></img>
            {props.children}
        </div>
    );
};

export default Icon;