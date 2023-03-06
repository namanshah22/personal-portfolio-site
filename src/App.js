import React from 'react';
import AboutMe from './about';
import './App.css';
import Contact from './contact';
import Education from './education';
import Skills from './skills';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Naman Shah's Portfolio</h1>
      </header>
      <Skills />
      <Education/>
      <AboutMe/>
      <Contact/>
    </div>
  );
}

export default App;
