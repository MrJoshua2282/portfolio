import React from 'react';
import './ReduxIcon.scss';
import sassIcon from '../../assets/img/redux.svg';

const Icon = (props) => {
    return (
        <div className='iconContainer'>
            <img className='redux' src={sassIcon} alt='redux logo'></img>
            {props.children}
        </div>
    );
};

export default Icon;