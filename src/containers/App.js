import React, {Component} from 'react';
import './App.scss';

import profilePic from '../assets/img/profile-pic.jpg';
import ReactIcon from '../components/Logos/ReactIcon';
import ReduxIcon from '../components/Logos/ReduxIcon';
//import NodeJsIcon from '../components/logos/NodeJsIcon';
import JsIcon from '../components/Logos/JsIcon'; 
import HtmlIcon from '../components/Logos/HtmlIcon';
import CssIcon from '../components/Logos/CssIcon';
import SassIcon from '../components/Logos/SassIcon';
// import GitIcon from '../components/logos/GitIcon';

import Cards from './Cards/Cards';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='container'>
          <div className='container--inner'>
            <header className='header--image'><p className='quote'> “Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” <br/>  —Bernard M. Baruch
              </p></header>
              <section className='info'>
              <section className='info--aboutMe'>
                <div className='info--aboutMe--div'>
                  <img className='info--aboutMe--div--pic'  alt='man' src={profilePic}></img>
                </div>
                <div className='info--aboutMe--description'>
                  <p>Joshua McCue</p>
                  <ul>
                    <li><p>Self-taught Font-end developer.</p></li>
                    <li><p>Passionate for clean, dynamic and maintainable code.</p></li>
                    <li><p>Eager for the opportunity to learn and serve.</p></li>
                  </ul>
                  <p className='info--aboutMe--description--email'> Email: jmccue369@gmail.com</p>
                </div>
              </section>
              <hr className='info--hr'></hr>
              <section className='info--languages'>
                <div className='info--languages--lang'>My Languages</div>
                <HtmlIcon ><span className='icon-text'>HTML</span></HtmlIcon>
                <CssIcon><span className='icon-text'>Css</span><hr className='info--languages--hr'></hr><SassIcon><span className='icon-text'>Sass</span></SassIcon></CssIcon>
                <JsIcon><span className='icon-text'>JavaScript</span></JsIcon>
                <ReactIcon><span className='icon-text'>React</span><hr className='info--languages--hr'></hr><ReduxIcon><span className='icon-text'>Redux</span></ReduxIcon></ReactIcon>
              </section>
            </section>
            <section className='allProjects'><Cards /> </section>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
