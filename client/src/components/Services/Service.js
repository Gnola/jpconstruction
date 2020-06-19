import React from 'react';

const Service = (props) => {
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
        <p id='inquire' onClick={()=>props.toggleView('contact')}>Inquire about our {props.title} services ></p>
      </div>
    </div>
  )
}

export default Service;
