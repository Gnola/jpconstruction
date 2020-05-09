import React, { Component } from 'react';

// COMPONENTS //


// HOME
const Contact = (props) => {
  return (
    <div className='Contact'>
      <ServicesLanding />
      <AboutLanding jason={props.jason} />
      <ContactLanding />
    </div>
  );
}

export default Contact;
