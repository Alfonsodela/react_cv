import React from "react";

const Education = ({ edu }) => {
  return edu.map((item, index) => {
    return (
      <div>
        <div className="education" key={index}>
          <h1>Education</h1>
          <h2 className="education__university">{item.university}</h2>
          <p className="education__description">{item.description}</p>
          <p className="education__date">{item.date}</p>
        </div>
      </div>
    );
  });
};

export default Education;
