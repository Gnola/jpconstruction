import React from 'react';

const SentModal = (props) => {
  return (
    <div className='modal-overlay'>
      <div className='modal-container'>
        <p>Your message has been sent! Thank you for your inquiry.</p>
        <button onClick={props.close}>Close</button>
      </div>
    </div>
  )
}

export default SentModal;
