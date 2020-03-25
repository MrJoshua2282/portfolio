import React, {Component} from 'react';
import './App.scss';

import Cards from './Cards/Cards';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='header'>
          <div className='header-image'>
            <p className='quote'> “If a thing’s worth doing at all, it’s worth doing well.”
            <br></br>
              <span className='author'>— Evelyn Waugh</span>
            </p>
          </div>
        </div>
        <div className="backgroundGradient">
          <Cards /> 
          <div>current project</div>         
          <div>Contact</div>
        </div>
      </div>
    );
  }
}

export default App;
