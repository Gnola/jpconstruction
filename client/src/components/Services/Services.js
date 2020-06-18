import React from 'react';

// COMPONENTS //
import Service from './Service.js'

// IMAGES //
import Stone from './servicesimgs/Stone.jpg';
import Bar from './servicesimgs/Bar.jpg';
import Kitchen from './servicesimgs/Kitchen.jpg';
// import Bathroom from './servicesimgs/Bathroom.jpeg';
// import LivingRoom from './servicesimgs/LivingRoom.jpeg';
import Bathroom2 from './servicesimgs/Bathroom2.jpeg';
import School from './servicesimgs/School.jpg';

// SERVICES //
let newConstruction = {
  title:'New Construction',
  services: ['Attic Conversion & Restoration', 'Baseboard Installation'],
  img:Kitchen,
  cssClass:'ServiceLeft'
}
let remodeling = {
  title:'Remodeling',
  services: ['Carport Installation', 'Cedar & Wood Siding'],
  img:Bathroom2,
  cssClass:'ServiceRight'
}
let renovations = {
  title:'Renovations',
  services: ['Carport Installation', 'Cedar & Wood Siding'],
  img:Bar,
  cssClass:'ServiceLeft'
}
let restorations = {
  title:'Restorations',
  services: ['Carport Installation', 'Cedar & Wood Siding'],
  img:Stone,
  cssClass:'ServiceRight'
}
let additionalServices = {
  title:'Additional Services',
  services: ['Carport Installation', 'Cedar & Wood Siding'],
  img:School,
  cssClass:'ServiceLeft'
}

// HOME
const Services = (props) => {



  return (
    <div className='Services'>
      <h1 className='PageTitle'>Services</h1>
      <p style={{textAlign:'center'}}>Whether it's residential or commercial we can help with interior & exterior construction, new construction, remodeling, renovations & restorations</p>
      <Service title={newConstruction.title} array={newConstruction.services} img={newConstruction.img} cssClass={newConstruction.cssClass} toggleView={props.toggleView}/>
      <Service title={remodeling.title} array={remodeling.services} img={remodeling.img} cssClass={remodeling.cssClass} toggleView={props.toggleView}/>
      <Service title={renovations.title} array={renovations.services} img={renovations.img} cssClass={renovations.cssClass} toggleView={props.toggleView}/>
      <Service title={restorations.title} array={restorations.services} img={restorations.img} cssClass={restorations.cssClass} toggleView={props.toggleView}/>
      <Service title={additionalServices.title} array={additionalServices.services} img={additionalServices.img} cssClass={additionalServices.cssClass} toggleView={props.toggleView}/>
    </div>
  );
}

export default Services;
