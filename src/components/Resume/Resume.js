import React from 'react';

import './Resume.scss';
import Mern from '../../assets/img/mern-certificate.jpg';
import ReactCert from '../../assets/img/react-certificate.jpg';
import Node from '../../assets/img/node-certificate.jpg';
import cssadvanced from '../../assets/img/css-certificate.jpg';
import htmlcss from '../../assets/img/html-css-certificate.jpg';
import jsweird from '../../assets/img/js-weirdparts-certificate.jpg';
import js from '../../assets/img/js-certificate.jpg';

export default function Resume() {
    return (
        <div className='resume_div'>
            <h2>QUALIFICATIONS</h2>
            <ul>
                <li>Full stack developer able to work independently as well as in a team setting</li>
                <li>Experienced in Html, Css, JS, React/Redux, Node.js, Express, MongoDB and Mongoose</li>
                <li>Adept at managing multiple tasks</li>
                <li>Excellent people skills</li>
            </ul>
            <h2>EDUCATION</h2>
            <img className='certificate' src={Mern} alt='certificate' />
            <img className='certificate' src={ReactCert} alt='certificate' />
            <img className='certificate' src={Node} alt='certificate' />
            <img className='certificate' src={js} alt='certificate' />
            <img className='certificate' src={cssadvanced} alt='certificate' />
            <img className='certificate' src={htmlcss} alt='certificate' />
            <img className='certificate' src={jsweird} alt='certificate' />
        </div>
    )
}
