import React from 'react';

const About = ({aboutMe}) => {
    return (
        <div className="about">
        <h1 className="about__title">About</h1>
        <p className='about__description'>{aboutMe.description}</p>
            
        </div>
    );
}

export default About;
