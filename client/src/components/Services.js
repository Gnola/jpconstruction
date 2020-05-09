import React, { Component } from 'react';

// COMPONENTS //


// HOME
const Services = (props) => {
  return (
    <div className='Services'>
      <ServicesLanding />
      <AboutLanding jason={props.jason} />
      <ContactLanding />
    </div>
  );
}

export default Services;
