import React from 'react';
import Jason from '../..//Header/headerimgs/Jason.JPG';

const AboutLanding = (props) => {
  return (
    <div id='AboutLanding' className='AboutLanding'>
      <div className='AboutLanding-Top'>
        <h1 className='LandingText'>About</h1>
      </div>
      <div className='AboutLanding-Mid'>
        <img className='AboutLandingImg' src={Jason} alt='Jason'/>
        <div className='AboutLandingText'>
          <p>Here are a few things about Jason</p>
          <p>General B Contractor / Finish Carpenter</p>
        </div>
      </div>
    </div>
  )
}
export default AboutLanding;
