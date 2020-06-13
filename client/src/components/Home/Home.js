import React from 'react';

// COMPONENTS //
import AboutLanding from './AboutLanding.js';
import ContactLanding from './ContactLanding.js';
import ServicesLanding from './ServicesLanding/ServicesLanding.js';

// HOME
const Home = (props) => {
  return (
    <div className='Home'>
      <ServicesLanding toggleView={props.toggleView}/>
      <AboutLanding jason={props.jason} />
      <ContactLanding toggleView={props.toggleView}/>
    </div>
  );
}

export default Home;
