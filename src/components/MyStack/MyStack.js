import React from 'react';

import * as S from './MyStack.styles.js';
import Logo from '../Logos/Logo';

const MyStack = () => {
    return (
        <S.MyStack>
            <Logo language='html' />
            <Logo language='css' />
            <Logo language='sass' />
            <Logo language='js' />
            <Logo language='react' />
            <Logo language='redux' />
            <Logo language='next' />
            <Logo language='gatsby' />
            <Logo language='shopify' />
            <Logo language='node' />
            <Logo language='express' />
            <Logo language='mysql' />
            <Logo language='sequelize' />
            <Logo language='mongodb' />
            <Logo language='mongoose' />
        </S.MyStack>
    );
};

export default MyStack;