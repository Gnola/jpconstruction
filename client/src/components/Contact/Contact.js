import React from 'react';

// COMPONENTS //


// HOME
const Contact = (props) => {
  return (
    <div className='Contact'>
      <h1 className='PageTitle'>Contact</h1>
      <div>
        <form className='ContactForm'>
          <div className='ContactFormInfo'>
          <span><label>Name </label> <input type='text' /></span>
          <span><label>Email </label> <input type='text' /></span>
          <span><label>Phone </label> <input type='text' placeholder='(555) 555-5555'/></span>
          </div>
          <div className='ContactFormInquire'>
            <label>Inquire </label>
            <textarea type='text' placeholder='I would love to know more about your service...'/>
          </div>
          <div className='ContactFormButton'>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
