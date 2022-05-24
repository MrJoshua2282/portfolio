import React, { useState, useRef } from 'react';

import './ProjectCard.scss';

import Logo from '../Logos/Logo';


const ProjectCard = props => {
    const [showVideo, setShowVideo] = useState(false);
    const [height, setHeight] = useState('0px');
    const videoRef = useRef(null);

    const updateShowVideo = () => {
        setHeight(!showVideo  ? videoRef.current.scrollHeight + 'px' : '0px')
        setShowVideo(!showVideo)
    }

    let git = props.gitHub.map(el => {
        return (<a href={el} key={el} target='_blank' rel="noopener noreferrer"><Logo style={{ display: 'inline' }} language='git' /></a>)
    })
    let viewUrl;
    let video = (
        <div className='video_container' 
            ref={videoRef} 
            style={{height: height, marginBottom: showVideo ? '1rem' : '0px', marginTop: showVideo ? '1rem' : '0px'}}
        >
            <video className='center_video' loop muted autoPlay>
                <source src={props.viewUrl[1]} />
            </video>
        </div>
    )
    if (props.viewUrl[0] === 'video') {
        viewUrl = (
            <button onClick={updateShowVideo} className='card-button'>
                {showVideo ? 'Hide' : 'View'}
            </button>
        )
    } else if (props.viewUrl[0] === 'site') {
        viewUrl = (
            <a href={props.viewUrl[1]} target='_blank' rel="noopener noreferrer"><button className='card-button'>View</button></a>
        )
    } else if (props.viewUrl[0] === 'web-site') {
        viewUrl = (
            <a href={props.viewUrl[1]} target='_blank' rel="noopener noreferrer"><button className='card-button card-button__margin-top'>View</button></a>
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
                    <div className='card-body-project-languages'>{props.FELanguages}</div>
                    <div className='card-body-project-languages'>{props.BELanguages}</div>
                    <span>{git}</span>
                    {viewUrl}
                </div>
            </div>
            {props.viewUrl[0] === 'video' && video}
        </React.Fragment>

    );
};

export default ProjectCard;