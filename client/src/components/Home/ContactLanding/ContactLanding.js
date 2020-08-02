import React from 'react';
import Form from './Form'

const ContactLanding = (props) => {
  return (
    <div id='ContactLanding'>
      <div className='ContactLanding-Top'>
        <h1 className='LandingText'>Contact Us!</h1>
        <h2>Monday - Friday | 9am - 5pm</h2>
      </div>
      <div className='ContactLanding-Mid'>
        <h3>Inquire about our services here:</h3>
        <Form />
      </div>
      <div className='ContactLanding-Bottom'>
        <h3>Or contact Jason Directly here:</h3>
        <div className='ContactLanding-Bottom-Links'>
          <span><i className="fas fa-phone fa-1x"></i> <a href='tel:707-812-5516' target='_blank' rel="noopener noreferrer">(707) 812-5516</a></span>
          <span><i className="fas fa-envelope fa-1x"></i> <a href='mailto:phillipscons@gmail.com' target='_blank' rel="noopener noreferrer">phillipscons@gmail.com</a></span>
        </div>
      </div>
    </div>
  )
}
export default ContactLanding;

      // <div className='ContactLandingContainer'>
      //   <div className='ContactLandingLeft'>
      //
      //   </div>
      //   <div className='ContactLandingRight'>
      //
      //   </div>
      // </div>
