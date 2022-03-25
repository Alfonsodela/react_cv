import React from "react";

const Experience = ({ jobs }) => {
  return jobs.map((item, index) => {
    return (
      
      <div className="experience" key={index}>
        <h2 className="experience__job-title">{item.job_title}</h2>
        <p className="experience__company">{item.company}</p>
        <p className="experience__date">{item.date}</p>
        <p className="experience__description">{item.description}</p>
      </div>
    );
  });
};

export default Experience;
