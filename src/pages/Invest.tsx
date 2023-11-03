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
    <div className='main-content'>
      <div>
        <img src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1679982347/elewa-group-website/hero-Images/dark-to-light_xrat5g.jpg' alt='/' className='/'/>
      </div>
      <div>
        <Text/>
      </div>
      <div>
        <Image/>
      </div>
      <div>
        <Figures/>
      </div>
      <div>
        <Stakeholder/>
      </div>
      <div>
        <Creative/>
      </div>
      <div>
        <Elewanv/>
      </div>
      <div>
        <Othertext/>
      </div>

    </div>
  )
}

export default Invest