import React from 'react';

// HEADER
const Header = (props) => {
  return (
    <div className='Header'>
      <h1 onClick={()=>props.toggleView('home')}>Phillips Construction</h1>
      <h2>Proudly serving the Napa Valley</h2>
    </div>
  )
}

export default Header;
