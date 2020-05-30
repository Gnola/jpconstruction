import React, { Component } from 'react';

// COMPONENTS //


// HOME
const About = (props) => {
  return (
    <div className='About'>
      <p>ABOUT PAGE</p>
      <img className='Jason' src={props.jason} />
    </div>
  );
}

export default About;
