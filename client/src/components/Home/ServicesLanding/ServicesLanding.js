import React from 'react';
import Slider from './Slider/Slider';
import ServicesContainer from './Services/ServiceContainer'


const ServicesLanding = (props) => {

  return (
    <div id='ServicesLanding'>
      <div className='ServiceText'>
        {/*<h2>Proudly serving the Napa Valley</h2>*/}
        <h2>Our mission is to provide our customers with exceptional customer service and quality workmanship.</h2>
        <p className='mission-statement'> We pride ourselves on treating our customers, employees and vendors with loyalty and respect in order to promote a workplace that inspires new ideas, transformations and growth while strictly maintaining the highest level of expertise, integrity and equality.</p>
      </div>
      <Slider toggleView={props.toggleView}/>
      <ServicesContainer />
    </div>
  )
}
export default ServicesLanding;
