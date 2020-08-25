import React from 'react';

// COMPONENTS //
import Services from './Services.js'

// IMAGES //
import Stone from './servicesimgs/Stone.jpg';
import Bar from './servicesimgs/Bar.jpg';
import Kitchen from './servicesimgs/Kitchen.jpg';
// import Bathroom from './servicesimgs/Bathroom.jpeg';
// import LivingRoom from './servicesimgs/LivingRoom.jpeg';
import Bathroom2 from './servicesimgs/Bathroom2.jpeg';
import School from './servicesimgs/School.jpg';
import Sink from './servicesimgs/Sink.jpg';
import Sink2 from './servicesimgs/Sink2.jpg';
import Counter from './servicesimgs/Counter.jpg';
import Stairs from './servicesimgs/Stairs.jpeg';

// SERVICES //
let newConstruction = {
  title:'New Construction',
  services: ['Drywall Installation & Texturing', 'Window Installation', 'Countertop Installation', 'Cedar & Wood Siding Installation', 'Insulation Installation', 'Composition & Metal Roofing', 'Trim Work', 'Water Heater Installation'],
  img:Stairs,
  cssClass:'ServiceLeft'
}
let remodeling = {
  title:'Remodeling',
  services: ['Kitchen Remodeling', 'Bathroom Remodeling', 'Outdoor Kitchen Construction', 'Porch Design and Construction'],
  img:Counter,
  cssClass:'ServiceRight'
}
let renovations = {
  title:'Renovations',
  services: ['Tile Installation', 'Shower Installation', 'Carport Installation', 'Attic Restoration & Conversion', 'Exterior Door Installation', 'Finish Carpentry', 'Laminate, Linoleum & Wood Flooring Installation', 'Baseboard Installation'],
  img:Bar,
  cssClass:'ServiceLeft'
}
let restorations = {
  title:'Restorations',
  services: ['Foundation Construction & Repair', 'Basement Remodeling & Waterproofing', 'Deck Building & Repair', 'Soffit Installation & Repair'],
  img:Stone,
  cssClass:'ServiceRight'
}
let additionalServices = {
  title:'Additional Services',
  services: ['Fireplace Installation', 'Fencing', 'Barn Design & Construction', 'Demolition', 'Storm Shelter', 'Earthquake Retrofitting'],
  img:School,
  cssClass:'ServiceLeft'
}

// HOME
const ServicesContainer = (props) => {
  return (
    <div id="ServicesContainer" className='ServicesContainer'>
      <div className='ServicesText'>
        <h1 className='LandingText' id='Services'>Services</h1>
        <p>Whether it's residential or commercial we can help with interior & exterior construction, new construction, remodeling, renovations & restorations.</p>
      </div>
      <Services title={newConstruction.title} array={newConstruction.services} img={newConstruction.img} cssClass={newConstruction.cssClass} toggleView={props.toggleView} setSubject={props.setSubject}/>
      <Services title={remodeling.title} array={remodeling.services} img={remodeling.img} cssClass={remodeling.cssClass} toggleView={props.toggleView} setSubject={props.setSubject}/>
      <Services title={renovations.title} array={renovations.services} img={renovations.img} cssClass={renovations.cssClass} toggleView={props.toggleView} setSubject={props.setSubject}/>
      <Services title={restorations.title} array={restorations.services} img={restorations.img} cssClass={restorations.cssClass} toggleView={props.toggleView} setSubject={props.setSubject}/>
      <Services title={additionalServices.title} array={additionalServices.services} img={additionalServices.img} cssClass={additionalServices.cssClass} toggleView={props.toggleView} setSubject={props.setSubject}/>
    </div>
  );
}

export default ServicesContainer;
