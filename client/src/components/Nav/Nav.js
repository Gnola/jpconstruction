import React from 'react';
import Mini from '../Header/headerimgs/MiniLogo.png';

// NAV
const Nav = (props) => {
  return (
    <div className={props.navDisplay}>
      <img className='nav-header' alt='MiniLogo' src={Mini} onClick={() => props.changePage('home')} />
      <a onClick={()=>props.changePage('home')} className={props.view === 'home' ? 'a-clicked' : null} href='#Header'>Home</a>
      <a onClick={()=>props.changePage('services')} className={props.view === 'services' ? 'a-clicked' : null} href='#ServicesLanding' >Services</a>
      <a onClick={()=>props.changePage('contact')} className={props.view === 'contact' ? 'a-clicked' : null} href='#ContactLanding' >Contact</a>
      <a onClick={()=>props.changePage('about')} className={props.view === 'about' ? 'a-clicked' : null} href='#AboutLanding' >About</a>
    </div>
  )
}

export default Nav;
