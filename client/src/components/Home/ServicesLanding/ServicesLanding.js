import React from 'react';
import Slider from './Slider/Slider';
import Services from './Services/Services'


const ServicesLanding = (props) => {

  return (
    <div id='SliderLanding' className='ServicesLanding'>
      <div className='ServiceText'>
        <h2>Proudly serving the Napa Valley</h2>
        <p>Our mission is to provide our customers with exceptional customer service and quality workmanship while strictly maintaining the highest level of expertise, integrity and equality. We pride ourselves on treating our customers, employees and vendors with loyalty and respect in order to promote a workplace that inspires new ideas, transformations and growth.</p>
      </div>
      <Slider toggleView={props.toggleView}/>
      <Services />
    </div>
  )
}
export default ServicesLanding;
