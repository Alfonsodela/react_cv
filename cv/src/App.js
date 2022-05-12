import React, { useState } from "react";
import "./App.scss";
import About from "./Components/About/About";
import Education from "./Components/Education/Education";
import Experience from "./Components/Experience/Experience";
import PersonalDetails from "./Components/PersonalDetails/PersonalDetails";
import data from "./Data/data";

const { personalDetails, about, experience, education } = data;

function App() {
  const [showExperience, setShowExperience] = useState(true);

  return (
    <div className="App">
      <div>
        <PersonalDetails info={personalDetails} />
        <div className="divider">
          <span></span>
          <span>Sobre mi</span>
          <span></span>
        </div>

        <About aboutMe={about} />
      </div>
      <nav>
        <div className="divider">
          <span></span>
          <span>
            <button
              className="custom-btn btn-4"
              onClick={() => setShowExperience(true)}
            >
              Experience
            </button>
            <button
              className="custom-btn btn-4"
              onClick={() => setShowExperience(false)}
            >
              Education
            </button>
          </span>
          <span></span>
        </div>
      </nav>

      <div>
        {showExperience ? (
          <Experience jobs={experience} />
        ) : (
          <Education edu={education} />
        )}
      </div>
    </div>
  );
}

export default App;
