import React from 'react';
// import Logo from './headerimgs/Logo.png';
// import Logo from './headerimgs/Logo2.png';
// import Logo from './headerimgs/Logo3.png';
import Logo from './headerimgs/Logo4.png';

// HEADER
const Header = (props) => {
  return (
    <div id='Header'>
      <img id='Logo' alt='Logo' src={Logo} onClick={()=>props.changePage('home')}/>
      <h1>Proudly serving the Napa Valley</h1>
    </div>
  )
}

export default Header;
