import React from 'react';

import './AboutMe.scss';
import MyStack from '../MyStack/MyStack';
import profilePic from '../../assets/img/profile-pic.jpg';

const AboutMe = () => {
    return (
        <div className='about-me'>
            <section className='about-me__section'>
                <img className='about-me__image' src={profilePic} alt='profile' />
                <ul >
                    <li className='about-me__list bold'>Joshua McCue</li>
                    <li className='about-me__list'>Full-Stack Developer</li>
                </ul>
            </section>
            <section className='about-me__stack'>
                <MyStack />
            </section>
        </div>
    );
};

export default AboutMe