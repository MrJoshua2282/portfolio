import React from 'react';

import './MyStack.scss';

import Logo from '../Logos/Logo';
// import NodeIcon from '../Logos/NodeJsIcon';
// import MongoDB from '../Logos/MongoDBIcon';
// import Express from '../Logos/ExpressIcon';

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
            <Logo language='mongodb' />
            <Logo language='mongoose' />
        </span>
    );
};

export default MyStack;