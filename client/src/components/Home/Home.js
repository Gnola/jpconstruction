import React, {useState} from 'react';

// COMPONENTS //
import ServicesLanding from './ServicesLanding/ServicesLanding.js';
import ContactLanding from './ContactLanding/ContactLanding.js';
import AboutLanding from './AboutLanding/AboutLanding.js';

// HOME
const Home = (props) => {

  const [subject, setSubject] = useState()

  return (
    <div className='Home'>
      <ServicesLanding toggleView={props.toggleView} setSubject={setSubject}/>
      <ContactLanding toggleView={props.toggleView} subject={subject}/>
      <AboutLanding jason={props.jason} />
    </div>
  );
}

export default Home;
