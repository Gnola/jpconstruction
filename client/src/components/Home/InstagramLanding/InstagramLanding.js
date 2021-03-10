import React from 'react'
import Feed from "react-instagram-authless-feed"


const InstagramLanding = (props) => {
  return (
    <div id='InstagramLanding'>
      <h3>Check out our <a href='https://www.instagram.com/jphillipsconstruction/' target='_blank' rel="noopener noreferrer">Instagram</a> for some recent projects!</h3>
      <Feed id='Feed' userName="jphillipsconstruction" className="Feed" classNameLoading="Loading" limit="9"/>
    </div>
  )
}

export default InstagramLanding
