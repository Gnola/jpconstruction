import React from 'react';
import Slider from './Slider/Slider';


const ServicesLanding = (props) => {

  return (
    <div className='ServicesLanding'>
      <div className='ServiceText'>
        <h2>Proudly serving the Napa Valley</h2>
      </div>
      <Slider toggleView={props.toggleView}/>
    </div>
  )
}
export default ServicesLanding;
