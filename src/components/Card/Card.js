import React from 'react';
import './Card.scss';

const card = (props) => {

let frontList = props.frontList.map((cur, i) => <li key={i} className='cardFront--list--items' id={`frontId-${i+1}`}>{cur}</li>);
    let backList = props.backList.map((cur, i) => <li key={i} className='cardBack--list--items' id={`backId-${i+1}`}>{cur}</li>);

    return (
        <div className='card'>
            <div className='cardFront side' style={{background: `linear-gradient(41deg, ${props.colorOne}, ${props.colorTwo})`, opacity: '.65'}} > 
                <div className='cardFront--top' >
                    <div className='cardFront--top--title'>{props.title}</div>
                    <img className='cardFront--top--img' src={props.src} alt='card'></img>
                </div>
                <ul className='cardFront--list'>
                    {frontList}
                </ul>
            </div>
            <div className='cardBack side' style={{background: `linear-gradient(20deg, ${props.colorTwo}, ${props.colorOne})`, opacity: '.65'}} >
                <ul className='cardBack--list'>
                    {backList}
                    <a className='anchorTitle' href={props.href} target='_blank' rel="noopener noreferrer">{props.anchorTitle}</a>
                </ul>
            </div>
        </div>
    );
}

export default card;