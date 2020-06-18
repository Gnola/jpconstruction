import React from 'react';
// import Logo from './headerimgs/Logo.png';
import Logo2 from './headerimgs/Logo2.png';

// HEADER
const Header = (props) => {
  return (
    <div className='Header'>
      <img id='Logo' alt='Logo' src={Logo2} onClick={()=>props.toggleView('home')}/>
    </div>
  )
}

export default Header;
