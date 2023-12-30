import React, { Component } from 'react';

import './App.css';
import AboutMe from '../components/AboutMe/AboutMe';
import Projects from '../components/Projects/Projects';
import ContactMe from '../components/ContactMe/ContactMe';

class App extends Component {
  render() {
    return (
      <div className='full-page'>
        <AboutMe />
        <div className='app-projects-section'>
          <Projects />
        </div>
        <ContactMe />
      </div>
    );
  }
}

export default App;
