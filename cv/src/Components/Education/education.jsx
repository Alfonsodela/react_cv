import React from "react";

const Education = ({ edu }) => {
  return edu.map((item, index) => {
    return (
      <div>
        <div className="education__card">
          <div key={index}>
            <p className="education__description">📕 {item.description}</p>
            <p>{item.university}</p>
            <p>{item.date}</p>
          </div>
        </div>
      </div>
    );
  });
};

export default Education;
