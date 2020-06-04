import React from 'react';

import './ProjectCard.scss';

import GitIcon from '../Logos/GitIcon';

const ProjectCard = props => {
    return (
        <div className='card-body'>
            <div>
                <span className='card-body-image' >{props.image}</span>
            </div>
            <div className='card-body-right'>
                <div className='card-body-project-name'>{props.name}</div>
                <div className='card-body-project-languages'>{props.languages}</div>
                <a href={props.gitHub} target='_blank' rel="noopener noreferrer"><GitIcon /></a>
                <a href={props.viewUrl} target='_blank' rel="noopener noreferrer"><button className='card-button'>View</button></a>
            </div>
        </div>
    );
};

export default ProjectCard;