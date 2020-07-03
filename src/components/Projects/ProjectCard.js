import React, { useState } from 'react';

import './ProjectCard.scss';

import Logo from '../Logos/Logo';

const ProjectCard = props => {
    const [showVideo, setShowVideo] = useState(false);

    let git = props.gitHub.map(el => {
        return (<a href={el} key={el} target='_blank' rel="noopener noreferrer"><Logo style={{ display: 'inline' }} language='git' /></a>)
    })
    let viewUrl;
    let video = (
        <div className='video_container'>
            <video className='center_video' loop muted autoPlay>
                <source src={props.viewUrl[1]} />
            </video>
        </div>
    )
    if (props.viewUrl[0] === 'video') {
        viewUrl = (
            <button onClick={() => setShowVideo(!showVideo)} className='card-button'>
                View
            </button>
        )
    } else if (props.viewUrl[0] === 'site') {
        viewUrl = (
            <a href={props.viewUrl[1]} target='_blank' rel="noopener noreferrer"><button className='card-button'>View</button></a>
        )
    }
    return (
        <React.Fragment>
            <div className='card-body'>
                <div>
                    <span className='card-body-image' >{props.image}</span>
                </div>
                <div className='card-body-right'>
                    <div className='card-body-project-name'>{props.name}</div>
                    <div className='card-body-project-languages'>{props.languages}</div>
                    <span>{git}</span>
                    {viewUrl}
                </div>
            </div>
            {props.viewUrl[0] === 'video' && showVideo && video}
        </React.Fragment>

    );
};

export default ProjectCard;