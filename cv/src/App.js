// import { useState } from "react";
import React from "react";
import "./App.scss";
// import About  from './Components/About/about';
// import Education from './Components/Education/education';
// import Experience from './Components/Experience/experience';
import PersonalDetails from './Components/PersonalDetails/personalDetails';
import data from './Data/data';

const {personalDetails, about, experience, education} = data;

function App() {
  return (
        <div className="App">
        <h1>Personal Details</h1>
            <PersonalDetails PersonalDetails={personalDetails}
            
            />
          

      
      {/* <About about={about} />
      <Experience experience={experience} />
      <Education education={education} /> */}
    </div>
  );
}

export default App;
