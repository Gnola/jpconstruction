import React, {useState} from 'react';

// COMPONENTS //
import ServicesLanding from './ServicesLanding/ServicesLanding.js';
import ContactLanding from './ContactLanding/ContactLanding.js';
import AboutLanding from './AboutLanding/AboutLanding.js';
import InstagramLanding from './InstagramLanding/InstagramLanding.js';

// HOME
const Home = (props) => {

  const [subject, setSubject] = useState()

  return (
    <div className='Home'>
      <ServicesLanding toggleView={props.toggleView} setSubject={setSubject}/>
      <ContactLanding toggleView={props.toggleView} subject={subject} sent={props.sent}/>
      <AboutLanding jason={props.jason} />
    </div>
  );
}

export default Home;
// <InstagramLanding />
