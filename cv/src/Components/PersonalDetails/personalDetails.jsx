import React from "react";

const PersonalDetails = ({ info }) => {
  return info.map((item, index) => {
    return (
      <div className="personalDetails" key={index}>
        <h1>Personal Details</h1>
        <h2 className="personalDetails__name">{item.name}</h2>
        <p className="personalDetails__linkedin">{item.linkedin}</p>
        <p className="personalDetails__email">{item.email}</p>
        <p className="personalDetails__phone">{item.phone}</p>
        <p className="personalDetails__location">{item.location}</p>
      </div>
    );
  });
};

export default PersonalDetails;
