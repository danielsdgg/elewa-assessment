import React from 'react'
import Care from '../Components/About/Care'
import Columns from '../Components/About/Columns'

const About = () => {
  return (
    <div className='main-body'>
      <div>
      <div>
        {/* Adding the image */}
        <img src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1679650530/elewa-team_digqu3.jpg' alt='pictures' className='image2'/>
      </div>
      <div className="care">
        <Care/>
      </div>
      <div className="column">
        <Columns/>
      </div>
      </div>

    </div>
  )
}

export default About