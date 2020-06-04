import React from 'react';
import './MongoDBIcon.scss';
import MongooseIcon from '../../assets/img/mongoose.jpg';

const Icon = (props) => {
    return (
        <div className='iconContainer'>
            <img className='mongoose' src={MongooseIcon} alt='mongoose logo'></img>
            {props.children}
        </div>
    );
};

export default Icon;