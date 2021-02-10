import React from 'react';
import './Logo.scss';
import sass from '../../assets/img/sass.svg';
import redux from '../../assets/img/redux.svg';
import react from '../../assets/img/react.svg';
import python from '../../assets/img/python.png';
import node from '../../assets/img/node.svg';
import mongoose from '../../assets/img/mongoose.jpg';
import mongodb from '../../assets/img/mongodb.png';
import js from '../../assets/img/js.svg';
import html from '../../assets/img/html5.svg';
import css from '../../assets/img/css3.svg';
import git from '../../assets/img/git.svg';
import express from '../../assets/img/express.jpg';
import linkedin from '../../assets/img/linkedin.png';
import mysql from '../../assets/img/mysql.png';
import sequelize from '../../assets/img/sequelize.svg'

const Icon = (props) => {
    let elSrc;
    switch (props.language) {
        case 'html':
            elSrc = html;
            break;
        case 'css':
            elSrc = css;
            break;
        case 'sass':
            elSrc = sass;
            break;
        case 'js':
            elSrc = js;
            break;
        case 'react':
            elSrc = react;
            break;
        case 'redux':
            elSrc = redux;
            break;
        case 'node':
            elSrc = node;
            break;
        case 'express':
            elSrc = express;
            break;
        case 'mysql':
            elSrc = mysql;
            break;
        case 'sequelize':
            elSrc = sequelize;
            break;
        case 'mongodb':
            elSrc = mongodb;
            break;
        case 'mongoose':
            elSrc = mongoose;
            break;
        case 'python':
            elSrc = python;
            break;
        case 'git':
            elSrc = git;
            break;
        case 'linkedin':
            elSrc = linkedin;
            break;
        default: elSrc = <h1>Error</h1>;
    }
    return (
        <span style={props.style} className='iconContainer'>
            <img className={`${props.language} ${props.className}`} src={elSrc} alt={`${props.language} icon`}></img>
            <span className='language-name'>{props.children}</span>
        </span>
    );
};

export default Icon;