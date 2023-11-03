import React from 'react'

const Info = () => {
  return (
    // Creating and adding stylings to our 'info' section then exporting the function to the main page of Social Impacts page which is located at 'social.tsx'
    <div className='bg-black text-white md:text-5xl flex p-5 justify-around'>
        <div>
          <h3>733+</h3>
          <p>People trained</p>
        </div>
        <div>
          <h3>733k</h3>
          <p>careers launched</p>
        </div>
        <div>
          <h3>200+</h3>
          <p>Projects finished</p>
        </div>
        <div>
        <h3>56</h3>
        <p >Investors</p>
        </div>
    </div>
  )
}

export default Info