import React from 'react';
import './Card.scss';
import ProjectBtn from '../../components/ProjectBtn/ProjectBtn';

const card = (props) => {
    let changeProjectHandler = (event) => {
        console.log(event.target.value);
    }

let frontList = props.frontList.map((cur, i) => <li key={i} className='cardFront--list--items' id={`frontId-${i+1}`}>{cur}</li>);
    let backList = props.backList.map((cur, i) => <li key={i} className='cardBack--list--items' id={`backId-${i+1}`}>{cur}</li>);

    return (
        <div className='card'>
            <div className='cardFront side' style={{background: `linear-gradient(41deg, ${props.colorOne}, ${props.colorTwo})`, opacity: '.75'}} > 
                <div className='cardFront--top' >
                    <div className='cardFront--top--title'>{props.title}</div>
                    <img className='cardFront--top--img' src={props.src} alt='card'></img>
                </div>
                <ul className='cardFront--list'>
                    {frontList}
                </ul>
            </div>
            <div className='cardBack side' style={{background: `linear-gradient(20deg, ${props.colorTwo}, ${props.colorOne})`}} >
                <ul className='cardBack--list'>
                    {backList}
                    <ProjectBtn clicked={(event) => changeProjectHandler(event)} > View {props.title} </ProjectBtn>
                </ul>
            </div>
        </div>
    );
}

export default card;