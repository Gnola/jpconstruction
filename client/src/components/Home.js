import React from 'react';

// COMPONENTS //
import AboutLanding from './Home/AboutLanding.js';
import ContactLanding from './Home/ContactLanding.js';
import ServicesLanding from './Home/ServicesLanding.js';

// HOME
const Home = (props) => {
  return (
    <div className='Home'>
      <ServicesLanding />
      <ContactLanding toggleView={props.toggleView}/>
      <AboutLanding jason={props.jason} />
    </div>
  );
}

export default Home;
