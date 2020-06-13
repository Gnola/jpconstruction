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
          {props.array.map(text =>
            <li>{text}</li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Service;
