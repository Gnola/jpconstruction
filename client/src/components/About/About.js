import React from 'react';
import Jason from '../../imgs/Jason.JPG'

// COMPONENTS //


// HOME
const About = (props) => {
  return (
    <div className='About'>
      <p>ABOUT PAGE</p>
      <img className='Jason' src={Jason} alt='jason'/>
    </div>
  );
}

export default About;
