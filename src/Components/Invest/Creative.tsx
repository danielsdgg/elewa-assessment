import React from 'react'

const Creative = () => {
  return (
    // Creating and adding stylings to our 'creative' section then exporting the function to the main page of Invest page which is located at 'invest.tsx'
    <div className='w-full bg-gray-100 py-16 px-4'>
        <div className='w-[100%] mx-auto grid md:grid-cols-2'>
            <div className='flex flex-col justify-center text-black'>
                <h2 className='font-semibold py-2 md:text-6xl sm:text-3xl text-2xl'>The Elewa Creative Hub</h2>
                <p>
                Coming soon; The Elewa Creative Hub Lies at the heart of our organization. A two-acre property at the center of Nairobi's creative district, the hub connects all Elewa's Activities under a single banner.
                </p>
                <p>
                    Through partnerships with creative community, the Elewa Hub will organize vibrant activites that bring talents from different fields (tech, business, art, fashion) together to nurture continuous innovation.
                </p>
            </div>
            <img className='w-[500px] mx-auto rounded-3xl my-4' src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1679983012/elewa-group-website/Images/creative-hub-image_dd6o8o.jpg' alt='mind'/>
        </div>
    </div>
  )
}

export default Creative