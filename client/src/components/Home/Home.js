import React from 'react';

// COMPONENTS //
import ServicesLanding from './ServicesLanding/ServicesLanding.js';
import ContactLanding from './ContactLanding/ContactLanding.js';
import AboutLanding from './AboutLanding/AboutLanding.js';

// HOME
const Home = (props) => {
  return (
    <div className='Home'>
      <ServicesLanding toggleView={props.toggleView}/>
      <ContactLanding toggleView={props.toggleView}/>
      <AboutLanding jason={props.jason} />
    </div>
  );
}

export default Home;
