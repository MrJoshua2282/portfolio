import React from 'react';
import './ProjectBtn.scss';

const projectBtn = (props) => {
    return (
        <button className='projectBtn' onClick={props.clicked}>{props.children}</button>
    );
}

export default projectBtn;