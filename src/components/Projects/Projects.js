import React from "react";

import * as S from "./Projects.styles.js";
import ProjectCard from "./ProjectCard";

import ebuy from "../../assets/img/ebuy-pic.png";
import smartCart from "../../assets/img/SmartCart.png";
import libraryCity from "../../assets/img/libCity.png";
import formApp from "../../assets/img/form.png";
// import imageMemoryCards from "../../assets/img/memory.png";
import CityShade from '../../assets/img/CityShade.png'
// import budgetApp from '../../assets/img/budget.png';
// import weatherApp from '../../assets/img/weather.png';
// import loopTimer from '../../assets/img/timer.png';
// import drumApp from '../../assets/img/drum.png';
// import quote from '../../assets/img/quote.png';
// import quiz from '../../assets/img/quiz.png';
// import ebuyGif from '../../assets/img/ebuy-rcording.gif';
import ebuyVideo from "../../assets/video/ebuy-rcording.mov";
import smartCartVideo from "../../assets/video/smartcartvideo.mov";
import libraryCityVideo from "../../assets/video/librarycityvideo.mov";

const projects = [
  {
    name: "CityShade Company",
    image: (
      <S.ProjectImg src={CityShade} alt="project" />
    ),
    viewUrl: ["web-site", "https://cityshadecompany.com/"],
    gitHub: [],
    FELanguages: "Shopify | Next.js"
  },
  {
    name: "SmartCart",
    image: <S.ProjectImg src={smartCart} alt="project" />,
    viewUrl: ["video", smartCartVideo],
    gitHub: ["https://github.com/jmccueTechtonic/sc"],
    FELanguages: "Sass | React",
    BELanguages: "Node.js | Express | MySQL | Sequelize",
  },
  {
    name: "Library City",
    image: (
      <S.ProjectImg src={libraryCity} alt="project" />
    ),
    viewUrl: ["video", libraryCityVideo],
    gitHub: ["https://github.com/jmccueTechtonic/libCity"],
    FELanguages: "Sass | React",
    BELanguages: "Node.js | Express | MySQL | Sequelize",
  },
  {
    name: "ebuy",
    image: <S.ProjectImg src={ebuy} alt="project" />,
    viewUrl: ["video", ebuyVideo],
    gitHub: [
      "https://github.com/MrJoshua2282/ebuy-front-end",
      "https://github.com/MrJoshua2282/ebuy-back-end",
    ],
    FELanguages: "Css | React | Redux(thunk)",
    BELanguages: "Node.js | Express | MongoDb | Mongoose",
  },

  // {
  //   name: "Memory Cards",
  //   image: (
  //     <S.ProjectImg src={imageMemoryCards} alt="project" />
  //   ),
  //   viewUrl: ["site", "https://mrjoshua2282.github.io/memoryCards/"],
  //   gitHub: ["https://github.com/MrJoshua2282/memoryCards/tree/master"],
  //   FELanguages: "Sass | React",
  // },
  {
    name: "Form Validation",
    image: <S.ProjectImg src={formApp} alt="project" />,
    viewUrl: ["site", "https://mrjoshua2282.github.io/forms/"],
    gitHub: ["https://github.com/MrJoshua2282/forms/tree/master"],
    FELanguages: "Css | React",
  },

  // { name: 'Quiz', image: <img className='project-image' src={quiz} alt='project' />, viewUrl: ['site', 'https://mrjoshua2282.github.io/quiz/'], gitHub: ['https://github.com/MrJoshua2282/quiz/tree/master'], FELanguages: 'Sass | React' },

  // { name: 'Budget App', image: <img className='project-image' src={budgetApp} alt='project' />, viewUrl: ['site', 'https://mrjoshua2282.github.io/BudgetApp/'], gitHub: ['https://github.com/MrJoshua2282/BudgetApp/tree/master'], FELanguages: 'Css | React' },

  // { name: 'Weather Forecast', image: <img className='project-image' src={weatherApp} alt='project' />, viewUrl: ['site', 'https://mrjoshua2282.github.io/weatherForecast/'], gitHub: ['https://github.com/MrJoshua2282/weatherForecast/tree/master'], FELanguages: 'Css | React' },

  // { name: 'Loop Timer', image: <img className='project-image' src={loopTimer} alt='project' />, viewUrl: ['site', 'https://mrjoshua2282.github.io/loopTimer/'], gitHub: ['https://github.com/MrJoshua2282/loopTimer/tree/master'], FELanguages: 'Css | React' },

  // { name: 'Drum Board', image: <img className='project-image' src={drumApp} alt='project' />, viewUrl: 'https://mrjoshua2282.github.io/drumBoard/', gitHub: ['https://github.com/MrJoshua2282/drumBoard/tree/master'], languages: 'Css | React' },

  // { name: 'Quote Machine', image: <img className='project-image' src={quote} alt='project' />, viewUrl: 'https://mrjoshua2282.github.io/quoteMachine/', gitHub: ['https://github.com/MrJoshua2282/quoteMachine/tree/master'], languages: 'Css | React' },
];

const Projects  = () => (
  <S.Projects>
    {projects.map((el) => (
  <ProjectCard
    key={el.name}
    name={el.name}
    image={el.image}
    viewUrl={el.viewUrl}
    gitHub={el.gitHub}
    FELanguages={el.FELanguages}
    BELanguages={el.BELanguages}
  />
  )
  )}
  </S.Projects>
)

export default Projects;
