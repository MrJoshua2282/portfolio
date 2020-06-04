import React, { Component } from 'react';

import './Projects.scss';
import ProjectCard from './ProjectCard';

import budgetApp from '../../assets/img/budget.png';
import formApp from '../../assets/img/form.png';
import imageMemoryCards from '../../assets/img/memory.png';
import weatherApp from '../../assets/img/weather.png';
import loopTimer from '../../assets/img/timer.png';
import drumApp from '../../assets/img/drum.png';
import quote from '../../assets/img/quote.png';

class Projects extends Component {
    state = {
        projects: [

            { name: 'Memory Cards', image: <img className='project-image' src={imageMemoryCards} alt='project' />, viewUrl: 'https://mrjoshua2282.github.io/memoryCards/', gitHub: 'https://github.com/MrJoshua2282/memoryCards/tree/master', languages: 'Sass | React' },

            { name: 'Form Validation', image: <img className='project-image' src={formApp} alt='project' />, viewUrl: 'https://mrjoshua2282.github.io/forms/', gitHub: 'https://github.com/MrJoshua2282/forms/tree/master', languages: 'Css | React' },

            { name: 'Budget App', image: <img className='project-image' src={budgetApp} alt='project' />, viewUrl: 'https://mrjoshua2282.github.io/BudgetApp/', gitHub: 'https://github.com/MrJoshua2282/BudgetApp/tree/master', languages: 'Css | React' },

            { name: 'Weather Forecast', image: <img className='project-image' src={weatherApp} alt='project' />, viewUrl: 'https://mrjoshua2282.github.io/weatherForecast/', gitHub: 'https://github.com/MrJoshua2282/weatherForecast/tree/master', languages: 'Css | React' },

            { name: 'Loop Timer', image: <img className='project-image' src={loopTimer} alt='project' />, viewUrl: 'https://mrjoshua2282.github.io/loopTimer/', gitHub: 'https://github.com/MrJoshua2282/loopTimer/tree/master', languages: 'Css | React' },

            { name: 'Drum Board', image: <img className='project-image' src={drumApp} alt='project' />, viewUrl: 'https://mrjoshua2282.github.io/drumBoard/', gitHub: 'https://github.com/MrJoshua2282/drumBoard/tree/master', languages: 'Css | React' },

            { name: 'Quote Machine', image: <img className='project-image' src={quote} alt='project' />, viewUrl: 'https://mrjoshua2282.github.io/quoteMachine/', gitHub: 'https://github.com/MrJoshua2282/quoteMachine/tree/master', languages: 'Css | React' },
        ]
    }
    render() {

        let card = this.state.projects.map((el, i) => {
            return (<ProjectCard key={i}
                name={el.name}
                image={el.image}
                viewUrl={el.viewUrl}
                gitHub={el.gitHub}
                languages={el.languages}
            />
            );
        });
        return (
            <div className='projects'>
                {card}
            </div>
        );
    }
}

export default Projects;