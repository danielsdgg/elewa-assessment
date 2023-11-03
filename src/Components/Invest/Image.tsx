import React from 'react'

const Image = () => {
  return (
    // Creating and adding stylings to our 'image' section then exporting the function to the main page of Invest page which is located at 'invest.tsx'
    <div>
        <img className='w-[90%] rounded-3xl mx-auto my-4' src='https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,w_1280/v1675690306/elewa-group-website/Images/Mask_Group_17_rjkgrq.png' alt='imagery'/>    
    </div>
  )
}

export default Image