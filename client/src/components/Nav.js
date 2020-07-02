import React from 'react';
import Mini from './headerimgs/MiniLogo.png';

// NAV
const Nav = (props) => {
  return (
    <div className='Nav' style={{background:props.color}}>
      <img className='nav-header' alt='MiniLogo' src={Mini} style={{display:props.display}} onClick={() => props.changePage('home')} />
      <a onClick={()=>props.changePage('home')} className={props.view === 'home' ? 'a-clicked' : null} href='#Header'>Home</a>
      <a onClick={()=>props.changePage('services')} className={props.view === 'services' ? 'a-clicked' : null} href='#ServicesLanding' >Services</a>
      <a onClick={()=>props.changePage('contact')} className={props.view === 'contact' ? 'a-clicked' : null} href='#ContactLanding' >Contact</a>
      <a onClick={()=>props.changePage('about')} className={props.view === 'about' ? 'a-clicked' : null} href='#AboutLanding' >About</a>
    </div>
  )
}

export default Nav;
// <p className={props.gallery ? 'a-clicked' : null} onClick={() => props.toggleView('gallery')}>Gallery</p>
//
// <h1 className='nav-header' style={{display:props.display}} onClick={() => props.toggleView('home')}>Phillips Construction</h1>
// <a className={props.view === 'home' ? 'a-clicked' : null} onClick={() => props.changePage('home')}>Home</a>
// <a className={props.view === 'services' ? 'a-clicked' : null} onClick={() => props.changePage('services')}>Services</a>
// <a className={props.view === 'about' ? 'a-clicked' : null} onClick={() => props.changePage('about')}>About</a>
// <a className={props.view === 'contact' ? 'a-clicked' : null} onClick={() => props.changePage('contact')}>Contact</a>
