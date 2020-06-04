import React from 'react';

import './AboutMe.scss';
import profilePic from '../../assets/img/profile-pic.jpg';

const AboutMe = () => {
    return (
        <div className='about-me padding'>
            <li className='list'>Eager to serve. Happy to help.</li>
            <img className='profile-pic' src={profilePic} alt='profile' />
            <ul >
                <li className='list name'>Joshua McCue</li>
                <li className='list'>Self-Taught</li>
                <li className='list'>Front End Developer</li>
                <li className='list'>Passionate for dry and dynamic code!</li>
            </ul>
            <li className='list name'>Email: jmccue369@gmail.com</li>
            <li className='list name'>Thank you for your time and consideration!</li>
        </div>
    );
};

export default AboutMe