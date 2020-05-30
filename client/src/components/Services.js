import React, { Component } from 'react';

// COMPONENTS //


// HOME
const Services = (props) => {
  return (
    <div className='Services'>
      <h1 className='ServicesHeading'>SERVICES PAGE</h1>
      <div className='Interior'>
        <div className='TitleAndImage'>
          <h1>Interior Services</h1>
          <img src='https://images.unsplash.com/photo-1521783593447-5702b9bfd267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=821&q=80' />
        </div>
        <div className='ServicesList'>
          <ul>
            <li>Attic Conversion & Restoration</li>
            <li>Baseboard Installation</li>
            <li>Basement Remodeling & Waterproofing</li>
            <li>Bathroom Remodeling</li>
            <li>Countertop Installation</li>
            <li>Drywall Installation & Texturing</li>
            <li>Fireplace Installation</li>
            <li>Insulation Installation</li>
            <li>Kitchen Remodeling</li>
            <li>Laminate & Linoleum Flooring Installation</li>
            <li>Shower Installation</li>
            <li>Tile Installation</li>
            <li>Water Heater Installation</li>
            <li>Window Installation</li>
            <li>Wood Floor Installation</li>
          </ul>
        </div>
      </div>
      <div className='Exterior'>
        <div className='ServicesList'>
          <ul>
            <li>Carport Installation</li>
            <li>Cedar & Wood Siding</li>
            <li>Composition & Metal Roofing</li>
            <li>Deck Building & Repair</li>
            <li>Exterior Door Installation</li>
            <li>Foundation Construction & Repair</li>
            <li>Trim Work</li>
            <li>Outdoor Kitchen Construction</li>
            <li>Porch Design & Construction</li>
            <li>Siding Installation</li>
            <li>Soffit Installation & Repair</li>
          </ul>
        </div>
        <div className='TitleAndImage'>
          <h1>Exterior Services</h1>
          <img src='https://images.unsplash.com/photo-1574120583586-de8847ae992c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' />
        </div>
      </div>
      <div className='Other'>
        <div className='TitleAndImage'>
          <h1>Other Services</h1>
          <img src='https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80' />
        </div>
        <div className='ServicesList'>
          <ul>
            <li>Barn Design & Construction</li>
            <li>Demolition</li>
            <li>Earthquake Retrofitting</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;
