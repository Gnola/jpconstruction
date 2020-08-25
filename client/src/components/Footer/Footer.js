import React from 'react';

// FOOTER
const Footer = (props) => {
  return (
    <footer className='Footer'>
      <div className='FooterContact'>
        <h4>Contact us:</h4>
        <span><i className="far fa-clock fa-1x"></i> <p style={{display:'inline', marginLeft:'1.5px'}} >Mon - Fri | 9am - 5pm</p></span><br/>
        <span><i className="fas fa-phone fa-1x"></i> <a href='tel:707-812-5516' target='_blank' rel="noopener noreferrer">(707) 812-5516</a></span><br/>
        <span><i className="fas fa-envelope fa-1x"></i> <a href='mailto:phillipscons@gmail.com' target='_blank' rel="noopener noreferrer">phillipscons@gmail.com</a></span>
      </div>
      <div className='FooterInfo'>
        <p>Jason Phillips, General B Contractor and Finish Carpenter</p>
        <p>License #10644287, Bonded and Insured</p>
        <p id='design-link'>Website design by: <a href='https://www.gianninola.com/'target='_blank' rel="noopener noreferrer" >Gianni Nola </a></p>
      </div>
      <div className='FooterConnect'>
        <h4>Connect with us:</h4>
        <a href='https://www.facebook.com/Phillips-Construction-104652161211306/' target='_blank' rel="noopener noreferrer"><i className="fab fa-facebook-square fa-2x"></i></a>
        <a href='https://www.instagram.com/jphillipsconstruction/' target='_blank' rel="noopener noreferrer"><i className="fab fa-instagram fa-2x" id='IG'></i></a>
      </div>
    </footer>
  )
}

export default Footer;
