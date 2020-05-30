import React from 'react';

// COMPONENTS //


// HOME
const About = (props) => {
  return (
    <div className='About'>
      <p>ABOUT PAGE</p>
      <img className='Jason' src={props.jason} alt='jason'/>
    </div>
  );
}

export default About;
