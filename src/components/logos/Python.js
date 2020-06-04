import React from 'react';
import './Python.scss';
import PythonIcon from '../../assets/img/python.png';

const Icon = (props) => {
    return (
        <div className='iconContainer'>
            <img className='python' src={PythonIcon} alt='css logo'></img>
            {props.children}
        </div>
    );
};

export default Icon;