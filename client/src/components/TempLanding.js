import React, { Component } from 'react';

class TempLanding extends Component {
  render() {
    return (
      <div className='landing'>
        <h1>Welcome to </h1>
          <h1 id='brand'>Phillips Construction</h1>
        <h2>This site is currently under constrution but will be live shortly!</h2>
        <h3>In the meantime, feel free to contact Jason at:</h3>
        <div className='landing-links'>
          <a href='#' target='_blank'>(707) 812-5516</a>
          |
          <a href='#' target='_blank'>phillipscons@gmail.com</a>
        </div>
      </div>
    );
  }
}

export default TempLanding;
