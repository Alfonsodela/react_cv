import React from 'react';

const About = ({aboutMe}) => {
    return (
        <div className="about">
        <p className='about__card'>{aboutMe.description}</p>
            
        </div>
    );
}

export default About;
