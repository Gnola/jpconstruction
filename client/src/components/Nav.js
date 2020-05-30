import React from 'react';

// NAV
const Nav = (props) => {
  return (
    <div className='Nav' style={{background:props.color}}>
      <h1 className='nav-header' style={{display:props.display}} onClick={() => props.toggleView('home')}>Phillips Construction</h1>
      <p className={props.home ? 'a-clicked' : null} onClick={() => props.toggleView('home')}>Home</p>
      <p className={props.services ? 'a-clicked' : null} onClick={() => props.toggleView('services')}>Services</p>
      <p className={props.gallery ? 'a-clicked' : null} onClick={() => props.toggleView('gallery')}>Gallery</p>
      <p className={props.about ? 'a-clicked' : null} onClick={() => props.toggleView('about')}>About</p>
      <p className={props.contact ? 'a-clicked' : null} onClick={() => props.toggleView('contact')}>Contact</p>
    </div>
  )
}

export default Nav;
