import React from 'react';
import Slider from './Slider/Slider';


const ServicesLanding = (props) => {

  return (
    <div className='ServicesLanding'>
      <div className='ServiceText'>
        <h1>ServiceText</h1>
      </div>
      <Slider toggleView={props.toggleView}/>
    </div>
  )
}
export default ServicesLanding;
