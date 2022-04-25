import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from './About.js';
import Contact from './Contact.js'
import Projects from './Projects.js'
import Header from './Header.js'
import Footer from './Footer.js'

const RouteSwitch = () => {
  const projectInfo = {
    "React": [{
      title: 'Memory Cards',
      repo: 'https://github.com/muscularmayo/memory-cards',
      link: 'https://muscularmayo.github.io/memory-cards/',
      info: `Don't click the same card twice! This project helped me further develop my CSS/HTML skills while also using
      functional react components and hooks to solidify my knowledge here. I'm most happy with the feel of the css, and
      the cleaner my code gets.`
    },
    {
      title: 'Equity Sticks',
      repo: 'https://github.com/muscularmayo/equity-sticks',
      link: 'https://muscularmayo.github.io/equity-sticks/',
      info: `First publicly released website that was used. A personal project I made using React and local storage as a makeshift database to simplify
      my work in the classroom. Utilized responsive design and an adherence to clean coding techniques to create an app that many people use.`
    },
    {
      title: 'CV Generator',
      repo: 'https://github.com/muscularmayo/cv-generator',
      link: 'https://muscularmayo.github.io/cv-generator/',
      info: `My introduction to React, made a user responsive page with synchronous page updates as they enter information. Also
      started my CSS skills development greatly.`
    }
  ],
    "Vanilla JS" : [{
      title: 'Battleship',
      repo: 'https://github.com/muscularmayo/battleship',
      link: 'https://muscularmayo.github.io/battleship/',
      info: `The classic game for my final vanilla js project, I utilized test driven development to create failing tests before
       developing code to satisfy those test requirements. Taught me a lot about organization and direction in a larger project
      like this, helped to segment each individual piece/component into a failing test suite and then work to build off that.
       Additionally, I learned about dynamically resizing the page based on the user size. Previously I had not considered
        mobile users at all, but with this project I wanted to make sure that all users could equally appreciate the game,
        so the page renders differently based on user screen size.`
    },
    {
      title: 'Weather Gif App',
      link: 'https://muscularmayo.github.io/weather-app/',
      repo: 'https://github.com/muscularmayo/weather-app',
      info: `A weather app that gives you the weather and an associated gif, both using separate api calls. Called information from
      a RESTful api and used asynchronous functions to display the information in the proper order.`
    }
  ],
    "jQuery": [{
      title: 'Twiddler',
      link: '',
      repo: 'https://github.com/muscularmayo/seip2104-twiddler/settings',
      info: `This class project has been made private, but we made a Twitter clone from scratch using test driven development and
      jQuery. This test suite used Mocha/Chai and we used Javascript and jQuery as well as HTML/CSS to recreate this clone.`
    }],
  }
  return (
    <BrowserRouter>
      <Header />
      <Home />
      <About />
      <Projects projects={projectInfo}/>
      <Contact />
      <Footer />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/#about" element={<About />} />
        <Route path="/#projects" element={<Projects />} />
        <Route path="/#contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch;
