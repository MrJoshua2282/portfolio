import React from 'react';
import './MongoDBIcon.scss';
import MongoDBIcon from '../../assets/img/mongodb.png';

const Icon = (props) => {
    return (
        <div className='iconContainer'>

            <img className='mongodb' src={MongoDBIcon} alt='mongoDb logo'></img>
            {props.children}
            <div className='language-name'>MongoDB</div>
        </div>
    );
};

export default Icon;