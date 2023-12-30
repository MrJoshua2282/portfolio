import React from 'react';
import * as S from './Logo.styles.js';
import sass from '../../assets/img/sass.svg';
import redux from '../../assets/img/redux.svg';
import react from '../../assets/img/react.svg';
import python from '../../assets/img/python.png';
import node from '../../assets/img/node.svg';
// import mongoose from '../../assets/img/mongoose.jpg';
import mongoose from '../../assets/img/mongoose.png';
import mongodb from '../../assets/img/mongodb.png';
import js from '../../assets/img/js.svg';
import html from '../../assets/img/html5.svg';
import css from '../../assets/img/css3.svg';
import git from '../../assets/img/git.svg';
import express from '../../assets/img/express.jpg';
import linkedin from '../../assets/img/linkedin.png';
import mysql from '../../assets/img/mysql.png';
import sequelize from '../../assets/img/sequelize.svg';
import next from '../../assets/img/next.png';
import gatsby from '../../assets/img/gatsby.svg';
import shopify from '../../assets/img/shopify.svg';

const Icon = ({language, style, children}) => {
    let elSrc;
    switch (language) {
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
        case 'next':
            elSrc = next;
            break;
        case 'gatsby':
            elSrc = gatsby;
            break;
        case 'shopify':
            elSrc = shopify;
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
        <S.IconContainer style={style}>
            <S.Logo language={language} src={elSrc} alt={`${language}`}/>
            <S.LanguageName>{children}</S.LanguageName>
        </S.IconContainer>
    );
};

export default Icon;