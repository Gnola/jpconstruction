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
          <h1>Jason Phillips</h1>
          <h3>Owner / General B Contractor / Finish Carpenter</h3>
          <p>I grew up in the Midwest and from early on have been in construction in some form or another. I went to school in Georgia and had a renovation business until I moved to New York where I continued to hone my skills and worked in top design houses such as SPAN Architecture/Alpha Workshops, Kips Bay Show House, Michael Tavano’s Ronald McDonald House, and Patrick Hamilton’s Holiday House. I moved to Napa, CA where I've worked with some top construction companies building wineries, breweries and high end homes, after which I decided to go out on my own.  It has always been my dream to serve the community and share my love of the trades.</p>
        </div>
      </div>
    </div>
  )
}
export default AboutLanding;
