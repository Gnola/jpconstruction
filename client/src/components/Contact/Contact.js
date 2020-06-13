import React from 'react';

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
          <label>Email:</label>
          <input type='text' />
            <label>Inquire:</label>
            <textarea type='text' />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
