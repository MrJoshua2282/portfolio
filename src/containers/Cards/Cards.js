import React, {Component} from 'react';
import './Cards.scss';
import Card from '../../components/Card/Card';

import ReactIcon from '../../components/Logos/ReactIcon';
// import ReduxIcon from '../../components/Logos/ReduxIcon';
// import NodeJsIcon from '../../components/Logos/NodeJsIcon';
import JsIcon from '../../components/Logos/JsIcon'; 
// import HtmlIcon from '../../components/Logos/HtmlIcon';
import CssIcon from '../../components/Logos/CssIcon';
import SassIcon from '../../components/Logos/SassIcon';
import GitIcon from '../../components/Logos/GitIcon';

import memory from '../../assets/img/memory.png';
import weather from '../../assets/img/weather.png';
import timer from '../../assets/img/timer.png';
import drum from '../../assets/img/drum.png';
import quote from '../../assets/img/quote.png';


class Cards extends Component {
    state = {
        cardList: [
            {title: 'Memory Cards', src: memory, languages:[<SassIcon><span className='icon-text'>Sass</span></SassIcon>, <JsIcon><span className='icon-text'>JavaScript</span></JsIcon>, <ReactIcon><span className='icon-text'>React</span></ReactIcon>], backList: [<a href='https://github.com/MrJoshua2282/memoryCards/tree/master' target='_blank' rel="noopener noreferrer"><GitIcon/></a>, 'Each player will be given two picks per turn. If the current player has a match, the current player continues. Otherwise, the next player has an opportunity to build off of the previous knowledge.'], href:'https://mrjoshua2282.github.io/memoryCards/', anchorTitle: 'Play Cards', colorOne: '#C6FFDD', colorTwo: '#f7797d'},

            {title: 'Weather Forecast', src: weather, languages:[<CssIcon><span className='icon-text'>Css</span></CssIcon>, <JsIcon><span className='icon-text'>JavaScript</span></JsIcon>, <ReactIcon><span className='icon-text'>React</span></ReactIcon>], backList: [<a href='https://github.com/MrJoshua2282/weatherForecast/tree/master' target='_blank' rel="noopener noreferrer"><GitIcon/></a>, 'Displaying the five-day forecast for any zip-code and containing temperature conditions in both Celsius and Fahrenheit. *Takes a few moments to load*'], href:'https://mrjoshua2282.github.io/weatherForecast/', anchorTitle: 'View Forecast', colorOne: 'white', colorTwo: '#039be5'},

            {title: 'Loop Timer', src: timer, languages:[<CssIcon><span className='icon-text'>Css</span></CssIcon>, <JsIcon><span className='icon-text'>JavaScript</span></JsIcon>, <ReactIcon><span className='icon-text'>React</span></ReactIcon>], backList: [<a href='https://github.com/MrJoshua2282/loopTimer/tree/master' target='_blank' rel="noopener noreferrer"><GitIcon/></a>, 'Containing a number of convenient features to allow not only aesthetic pleasure but ease and comfort expected from any timer.'], href:'https://mrjoshua2282.github.io/loopTimer/', anchorTitle: 'Use Timer', colorOne: '#8360c3', colorTwo: '#2ebf91'},

            {title: 'Drum Board', src: drum, languages:[<CssIcon><span className='icon-text'>Css</span></CssIcon>, <JsIcon><span className='icon-text'>JavaScript</span></JsIcon>, <ReactIcon><span className='icon-text'>React</span></ReactIcon>], backList: [<a href='https://github.com/MrJoshua2282/drumBoard/tree/master' target='_blank' rel="noopener noreferrer"><GitIcon/></a>, 'With a simple stroke of a button, the user can effortlessly alternate from one sound board to another. Using either the mouse or the keyboard, the user can be entertained with up to 18 different sounds.'], href:'https://mrjoshua2282.github.io/drumBoard/', anchorTitle: 'Play Music', colorOne: '#11998e', colorTwo: '#38ef7d'},

            {title: 'Quote Machine', src: quote, languages:[<CssIcon><span className='icon-text'>Css</span></CssIcon>, <JsIcon><span className='icon-text'>JavaScript</span></JsIcon>, <ReactIcon><span className='icon-text'>React</span></ReactIcon>], backList: [<a href='https://github.com/MrJoshua2282/quoteMachine/tree/master' target='_blank' rel="noopener noreferrer"><GitIcon/></a>, 'Be uplifted with a multitude of inspiring quotes. Share with friends and family on social media.'], href:'https://mrjoshua2282.github.io/quoteMachine/', anchorTitle: 'Be Inspired', colorOne: '#ef32d9', colorTwo: '#89fffd'},
        ]
    }


    render() {
        let card = this.state.cardList.map((cur, i) => {
            return (
                <Card key={i} 
                title={cur.title}
                src={cur.src}
                frontList={cur.languages}
                backList={cur.backList}
                colorOne={cur.colorOne}
                colorTwo={cur.colorTwo}
                anchorTitle={cur.anchorTitle}
                href={cur.href}
                />
            );
        });
        return (
            <div className='projects'>
                {card}
                
                {/* <ProjectBtn onClick={this.changeProjectHandler} /> */}
            </div>
        );
    }
}

export default Cards;