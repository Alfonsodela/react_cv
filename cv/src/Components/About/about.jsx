import React from 'react';

const About = ({aboutMi}) => {
    return (
        <div className="about">
        <h1 className="about__title">About</h1>
        <p className='about__description'>{aboutMi.description}</p>
            
        </div>
    );
}

export default About;
