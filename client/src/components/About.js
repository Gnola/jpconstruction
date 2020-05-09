import React, { Component } from 'react';

// COMPONENTS //


// HOME
const About = (props) => {
  return (
    <div className='About'>
      <ServicesLanding />
      <AboutLanding jason={props.jason} />
      <ContactLanding />
    </div>
  );
}

export default About;
