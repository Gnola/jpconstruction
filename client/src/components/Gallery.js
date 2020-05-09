import React, { Component } from 'react';

// COMPONENTS //


// HOME
const Gallery = (props) => {
  return (
    <div className='Gallery'>
      <ServicesLanding />
      <AboutLanding jason={props.jason} />
      <ContactLanding />
    </div>
  );
}

export default Gallery;
