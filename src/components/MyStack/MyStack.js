import React from 'react';

import './MyStack.scss';

import Html from '../Logos/HtmlIcon';
import Css from '../Logos/CssIcon';
import Sass from '../Logos/SassIcon';
import Js from '../Logos/JsIcon';
import ReactIcon from '../Logos/ReactIcon';
import Redux from '../Logos/ReduxIcon';
// import NodeIcon from '../Logos/NodeJsIcon';
// import MongoDB from '../Logos/MongoDBIcon';
// import Express from '../Logos/ExpressIcon';

const MyStack = () => {
    return (
        <div className='my-stack'>
            <Html />
            <Css />
            <Sass />
            <Js />
            <ReactIcon />
            <Redux />
        </div>
    );
};

export default MyStack;