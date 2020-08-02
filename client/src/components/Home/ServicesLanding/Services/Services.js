import React from 'react';

const Services = (props) => {
  return (
    <div className={props.cssClass}>
      <div className='ServicesImage'>
        <img src={props.img} alt='placeholder'/>
      </div>
      <div className='ServicesTitleandList'>
        <h1>{props.title}</h1>
        <ul>
          {props.array.map((text, index) =>
            <li key={index}>{text}</li>
          )}
        </ul>
        <a id='inquire' href='#ContactLanding'>Inquire about our {props.title} ></a>
      </div>
    </div>
  )
}

export default Services;
// <p id='inquire' onClick={()=>props.toggleView('contact')}>Inquire about our {props.title} services ></p>
