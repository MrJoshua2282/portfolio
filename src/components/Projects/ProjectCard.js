import React from 'react';

import './ProjectCard.scss';

import Logo from '../Logos/Logo';

const ProjectCard = props => {
    let git = props.gitHub.map(el => {
        return (<a href={el} key={el} target='_blank' rel="noopener noreferrer"><Logo style={{ display: 'inline' }} language='git' /></a>)
    })
    return (
        <div className='card-body'>
            <div>
                <span className='card-body-image' >{props.image}</span>
            </div>
            <div className='card-body-right'>
                <div className='card-body-project-name'>{props.name}</div>
                <div className='card-body-project-languages'>{props.languages}</div>
                <span>{git}</span>
                <a href={props.viewUrl} target='_blank' rel="noopener noreferrer"><button className='card-button'>View</button></a>
            </div>
        </div>
    );
};

export default ProjectCard;