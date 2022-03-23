import React from "react";

const PersonalDetails = ({ personalDetails }) => {
  return (
    <div className="personalDetails">
      <h2 className="personalDetails__name">{personalDetails.name}</h2>
      <p className="personalDetails__linkedin">{personalDetails.linkedin}</p>
      <p className="personalDetails__email">{personalDetails.email}</p>
      <p className="personalDetails__phone">{personalDetails.phone}</p>
      <p className="personalDetails__location">{personalDetails.location}</p>
    </div>
  );
};

export default PersonalDetails;
