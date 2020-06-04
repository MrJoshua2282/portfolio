import React from 'react';
import './NodeJsIcon.scss';
import nodeJsIcon from '../../assets/img/node.svg';

const Icon = (props) => {
    return (
        <div className='iconContainer'>
            <img className='node' src={nodeJsIcon} alt='node logo'></img>
            {props.children}
            <div className='language-name'>NodeJS</div>
        </div>
    );
};

export default Icon;