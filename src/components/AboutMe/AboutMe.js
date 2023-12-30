import React from 'react';

import * as S from './AboutMe.styles.js';
import MyStack from '../MyStack/MyStack';
import profilePic from '../../assets/img/profile-pic.jpg';

const AboutMe = () => {
    return (
        <S.AboutMeWrapper className='header-image'>
            <S.AboutMeSection>
                <S.AboutMeImage src={profilePic} alt='profile' />
                <ul>
                    <S.AboutMeList bold>Joshua McCue</S.AboutMeList>
                    <S.AboutMeList>Full-Stack Developer</S.AboutMeList>
                </ul>
            
                <MyStack />
            </S.AboutMeSection>
        </S.AboutMeWrapper>
    );
};

export default AboutMe