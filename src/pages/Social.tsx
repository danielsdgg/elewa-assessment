import React from 'react'
import Info from '../Components/SocialImpacts/Info'
import Business from '../Components/SocialImpacts/Business'
import Mindset from '../Components/SocialImpacts/Mindset'
import Beyond from '../Components/SocialImpacts/Beyond'
import Knowledge from '../Components/SocialImpacts/Knowledge'
import Projects from '../Components/SocialImpacts/Projects'
import Message from '../Components/SocialImpacts/Message'

function Social() {
  // The website page of Social Impacts
  return (
    // No need of importing the Navbar and Footer Components since it has already been parsed from the main file where our application is running from (App.tsx)
    <div>
      {/* All the Features of the Social Impacts page have been created on 'socialimpacts' folder which is under the components folder; Then from here we are just importing the functions and parsing them here (our main page for Social Impacts) */}
      <div>
        {/* Adding the image */}
        <img src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1679910469/elewa-group-website/hero-Images/pexels-bg-edit_bb4znx.jpg' alt='pic' className='image1'/>
        <div className='absolute top-50% z-1'>
          <p>Scaling impact. Beyond the norm</p>
          <h2 className='font-semibold'>Human and Environmental Impact</h2>
          <h2 className='font-semibold'>through Social Enterprise</h2>
        </div>
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
      {/* Creating a div for the 'beyond' Component and importing it */}
      <div className="beyond">
        <Beyond/>
      </div>
      {/* Creating a div for the 'knowledge' Component and importing it */}
      <div className="knowledge">
        <Knowledge/>
      </div>
      {/* Creating a div for the 'projects' Component and importing it */}
      <div className="projects">
        <Projects/>
      </div>
      {/* Creating a div for the 'message' Component and importing it */}
      <div className="message">
        <Message/>
      </div>
    </div>
  )
}

export default Social