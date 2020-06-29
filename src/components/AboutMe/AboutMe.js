import React from 'react';

import './AboutMe.scss';
import MyStack from '../MyStack/MyStack';
import profilePic from '../../assets/img/profile-pic.jpg';

const AboutMe = () => {
    return (
        <div className='about-me '>
            <section className='about-me-section'>
                <li className='list'>Eager to serve Happy to help.</li>
                <img className='profile-pic' src={profilePic} alt='profile' />
                <ul >
                    <li className='list bold'>Joshua McCue</li>
                    <li className='list'>Self-Taught</li>
                    <li className='list'>Full Stack Developer</li>
                    <li className='list'>Passionate for dry, dynamic, and maintainable code!</li>
                </ul>
            </section>
            <section className='about-me-my_stack'>
                <MyStack />
            </section>
        </div>
    );
};

export default AboutMe