import React, { Component } from 'react';

import './App.scss';
import headerImage from '../assets/img/nature.jpg';
import AboutMe from '../components/AboutMe/AboutMe';
import MyStack from '../components/MyStack/MyStack';
import Projects from '../components/Projects/Projects';
// import Form from '../components/Form/Form';

class App extends Component {
  render() {
    return (
      <div className='full-page'>
        <img className='header-image' src={headerImage} alt='waterfall and nature' />
        {/* <div className='nav-bar'>Eager to serve! Happy to help!</div> */}
        <main className='body'>
          <AboutMe />
          <MyStack />
          <div className='right-side'>
            <Projects />
            {/* <Form /> */}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
