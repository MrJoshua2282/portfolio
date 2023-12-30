import React, { useState, useRef } from 'react';

import * as S from './ProjectCard.styles.js';

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
        <S.VideoContainer
            ref={videoRef} 
            style={{height: height, marginTop: showVideo ? '20px' : '0px' }}
        >
            <S.Video loop muted autoPlay>
                <source src={props.viewUrl[1]} />
            </S.Video>
        </S.VideoContainer>
    )
    if (props.viewUrl[0] === 'video') {
        viewUrl = (
            <S.CardButton onClick={updateShowVideo}>
                {showVideo ? 'Hide' : 'View'}
            </S.CardButton>
        )
    } else if (props.viewUrl[0] === 'site') {
        viewUrl = (
            <a href={props.viewUrl[1]} target='_blank' rel="noopener noreferrer"><S.CardButton>View</S.CardButton></a>
        )
    } else if (props.viewUrl[0] === 'web-site') {
        viewUrl = (
            <a href={props.viewUrl[1]} target='_blank' rel="noopener noreferrer"><S.CardButton margin>View</S.CardButton></a>
        )
    }
    return (
        <S.Wrapper>
            <S.CardBody>
                <div>
                 {props.image}
                </div>
                <S.CardBodyRight>
                    <S.ProjectName>{props.name}</S.ProjectName>
                    <S.ProjectLanguages>{props.FELanguages}</S.ProjectLanguages>
                    <S.ProjectLanguages>{props.BELanguages}</S.ProjectLanguages>
                    <span>{git}</span>
                    {viewUrl}
                </S.CardBodyRight>
            </S.CardBody>
            {props.viewUrl[0] === 'video' ? video : null}
        </S.Wrapper>

    );
};

export default ProjectCard;