import React from 'react'
import Text from '../Components/Invest/Text'
import Image from '../Components/Invest/Image'
import Figures from '../Components/Invest/Figures'
import Stakeholder from '../Components/Invest/Stakeholder'
import Creative from '../Components/Invest/Creative'
import Elewanv from '../Components/Invest/Elewanv'
import Othertext from '../Components/Invest/Othertext'

const Invest = () => {
  return (
    // The website page of Invest
    <div className='main-content'>
      {/* Adding image */}
      <div>
        <img src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1679982347/elewa-group-website/hero-Images/dark-to-light_xrat5g.jpg' alt='/' className='/'/>
      </div>
      {/* Creating a div for the 'Text' Component and importing it */}
      <div>
        <Text/>
      </div>
      {/* Creating a div for the 'Image' Component and importing it */}
      <div>
        <Image/>
      </div>
      {/* Creating a div for the 'Figures' Component and importing it */}
      <div>
        <Figures/>
      </div>
      {/* Creating a div for the 'Stakeholder' Component and importing it */}
      <div>
        <Stakeholder/>
      </div>
      {/* Creating a div for the 'Creative' Component and importing it */}
      <div>
        <Creative/>
      </div>
      {/* Creating a div for the 'Elewanv' Component and importing it */}
      <div>
        <Elewanv/>
      </div>
      {/* Creating a div for the 'Othertext' Component and importing it */}
      <div>
        <Othertext/>
      </div>

    </div>
  )
}

export default Invest