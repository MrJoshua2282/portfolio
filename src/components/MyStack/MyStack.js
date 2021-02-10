import React from 'react';

import './MyStack.scss';
import Logo from '../Logos/Logo';

const MyStack = () => {
    return (
        <span className='my-stack'>
            <Logo language='html' />
            <Logo language='css' />
            <Logo language='sass' />
            <Logo language='js' />
            <Logo language='react' />
            <Logo language='redux' />
            <Logo language='node' />
            <Logo language='express' />
            <Logo language='mysql' />
            <Logo language='sequelize' />
            <Logo language='mongodb' />
            <Logo language='mongoose' />
        </span>
    );
};

export default MyStack;