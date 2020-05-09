import React, { Component } from 'react';

class TempLanding extends Component {
  render() {
    return (
      <div className='landing'>
        <h1>Welcome to </h1>
          <h1 id='brand'>Phillips Construction</h1>
        <h2>This site is currently under construction but will be live shortly!</h2>
        <h3>In the meantime, feel free to contact Jason at:</h3>
        <div className='landing-links'>
          <a href='tel:707-812-5516' target='_blank'>(707) 812-5516</a>
          |
          <a href='mailto:phillipscons@gmail.com' target='_blank'>phillipscons@gmail.com</a>
        </div>
        <h4>And connect with us here:
          <span className='connect'>
            <a href='https://www.facebook.com/Phillips-Construction-104652161211306/' target='_blank'>Facebook</a>
              |
            <a href='https://www.instagram.com/jphillipsconstruction/' target='_blank'>Instagram</a>
          </span>
        </h4>
      </div>
    );
  }
}

export default TempLanding;
