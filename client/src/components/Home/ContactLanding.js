import React from 'react';

const ContactLanding = (props) => {
  return (
    <div className='ContactLanding'>
      <h1 className='LandingText'>Contact Us!</h1>
      <h3>Monday - Friday | 9am - 5pm</h3>
      <div className='ContactLandingContainer'>
        <div className='ContactLandingLeft'>
          <h3>Contact Jason Directly here:</h3>
          <span><i className="fas fa-phone fa-1x"></i> <a href='tel:707-812-5516' target='_blank' rel="noopener noreferrer">(707) 812-5516</a></span><br/>
          <span><i className="fas fa-envelope fa-1x"></i> <a href='mailto:phillipscons@gmail.com' target='_blank' rel="noopener noreferrer">phillipscons@gmail.com</a></span>
        </div>
        <div className='ContactLandingRight'>
          <h3>Or inquire about our services <span id='contact-link' onClick={()=>props.toggleView('contact')}>here</span></h3>
        </div>
      </div>

    </div>
  )
}
export default ContactLanding;
