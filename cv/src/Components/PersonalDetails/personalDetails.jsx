import React from "react";

const PersonalDetails = ({ info }) => {
  return info.map((item, index) => {
    return (
      <div className="personalDetails" key={index}>
        <img src={item.image} alt="" className="personalDetails__img" />
        <div className="personalDetails__card">
          <h2 className="personalDetails__name">{item.name}</h2>
          <p>
            π¦<a href={item.linkedin}>Linkedin</a>
          </p>
          <p>
            π§
            <a href={"mailto:" + item.email}>alfonsodelamanzanara@gmail.com</a>
          </p>
          <p>
            πΎ<a href={item.gitHub}>GitHub</a>
          </p>
          <p>{item.phone}</p>
          <p>πΊοΈ{item.location}</p>
        </div>
      </div>
    );
  });
};

export default PersonalDetails;
