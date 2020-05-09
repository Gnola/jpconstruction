import React, { Component } from 'react';

// COMPONENTS //
import AboutLanding from './Home/AboutLanding.js';
import ContactLanding from './Home/ContactLanding.js';
import ServicesLanding from './Home/ServicesLanding.js';

// HOME
const Home = (props) => {
  return (
    <div className='Home'>
      <ServicesLanding />
      <AboutLanding jason={props.jason} />
      <ContactLanding />
    </div>
  );
}

export default Home;
