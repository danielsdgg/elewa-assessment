import React from 'react'
import Info from '../Components/SocialImpacts/Info'
import Business from '../Components/SocialImpacts/Business'
import Mindset from '../Components/SocialImpacts/Mindset'

function Social() {
  return (
    // No need of importing the Navbar Component since it has already been parsed from the main file where our application is running from (App.tsx)
    <div>
      <div>
        {/* Adding the image */}
        <img src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1679910469/elewa-group-website/hero-Images/pexels-bg-edit_bb4znx.jpg' alt='pic' className='image1'/>
      </div>
      {/* Creating a div for the 'Info' Component and importing it */}
      <div className='info'>
        <Info/>
      </div>
      {/* Creating a div for the 'business' Component and importing it */}
      <div className="business">
        <Business/>
      </div>
      {/* Creating a div for the 'mindset' Component and importing it */}
      <div className="mindset">
        <Mindset/>
      </div>
    </div>
  )
}

export default Social