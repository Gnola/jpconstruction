import React from 'react';
import Mini from './headerimgs/MiniLogo.png';

// NAV
const Nav = (props) => {
  return (
    <div className='Nav' style={{background:props.color}}>
      <img className='nav-header' alt='MiniLogo' src={Mini} style={{display:props.display}} onClick={() => props.toggleView('home')} />
      <p className={props.home ? 'a-clicked' : null} onClick={() => props.toggleView('home')}>Home</p>
      <p className={props.services ? 'a-clicked' : null} onClick={() => props.toggleView('services')}>Services</p>
      <p className={props.about ? 'a-clicked' : null} onClick={() => props.toggleView('about')}>About</p>
      <p className={props.contact ? 'a-clicked' : null} onClick={() => props.toggleView('contact')}>Contact</p>
    </div>
  )
}

export default Nav;
// <p className={props.gallery ? 'a-clicked' : null} onClick={() => props.toggleView('gallery')}>Gallery</p>
//
// <h1 className='nav-header' style={{display:props.display}} onClick={() => props.toggleView('home')}>Phillips Construction</h1>
