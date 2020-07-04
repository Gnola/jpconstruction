import React from 'react';
// import Logo1 from './headerimgs/Logo.png';
// import Logo2 from './headerimgs/Logo2.png';
// import Logo3 from './headerimgs/Logo3.png';
import Logo4 from './headerimgs/Logo4.png';

// HEADER
const Header = (props) => {
  return (
    <div id='Header' className='Header'>
      <img id='Logo' alt='Logo' src={Logo4} onClick={()=>props.changePage('home')}/>
    </div>
  )
}

export default Header;
