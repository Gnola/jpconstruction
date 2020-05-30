import React, { Component } from 'react';

// COMPONENTS //


// HOME
const Contact = (props) => {
  return (
    <div className='Contact'>
      <p>CONTACT PAGE</p>
      <div>
        <form className='ContactForm'>
          <label>Name:</label>
          <input type='text' />
        </form>
      </div>
    </div>
  );
}

export default Contact;
