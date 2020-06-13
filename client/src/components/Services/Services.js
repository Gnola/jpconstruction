import React from 'react';

// COMPONENTS //
import Service from './Service.js'

// IMAGES //
import Stone from './servicesimgs/Stone.jpg';

// SERVICES //
let newConstruction = {
  title:'New Construction',
  services: ['Attic Conversion & Restoration', 'Baseboard Installation'],
  img:'https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
  cssClass:'ServiceLeft'
}
let remodeling = {
  title:'Remodeling',
  services: ['Carport Installation', 'Cedar & Wood Siding'],
  img:'https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
  cssClass:'ServiceRight'
}
let renovations = {
  title:'Renovations',
  services: ['Carport Installation', 'Cedar & Wood Siding'],
  img:'https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
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
  img:'https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
  cssClass:'ServiceLeft'
}

// HOME
const Services = (props) => {



  return (
    <div className='Services'>
      <h1 className='ServicesHeading'>SERVICES PAGE</h1>
      <Service title={newConstruction.title} array={newConstruction.services} img={newConstruction.img} cssClass={newConstruction.cssClass}/>
      <Service title={remodeling.title} array={remodeling.services} img={remodeling.img} cssClass={remodeling.cssClass}/>
      <Service title={renovations.title} array={renovations.services} img={renovations.img} cssClass={renovations.cssClass}/>
      <Service title={restorations.title} array={restorations.services} img={restorations.img} cssClass={restorations.cssClass}/>
      <Service title={additionalServices.title} array={additionalServices.services} img={additionalServices.img} cssClass={additionalServices.cssClass}/>
    </div>
  );
}

export default Services;
