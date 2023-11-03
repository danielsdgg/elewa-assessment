import React from 'react'

const Knowledge = () => {
  return (
    // Creating and adding stylings to our 'knowledge' section then exporting the function to the main page of Social Impacts page which is located at 'social.tsx'
    <div className='w-full bg-black py-16 px-4'>
    <div className='max-w-[100%] mx-auto grid md:grid-cols-2'>
        <div className='flex flex-col justify-center text-white'>
            <h2 className='font-semibold py-2 md:text-6xl sm:text-3xl text-2xl'>Open knowledge</h2>
            <p>
                What we learn, we share. Through community events, open knowledge repositories, regular teaching moments (everyone a teacher) and academic partnerships.   
            </p>
        </div>
        <img className='w-[500px] mx-auto my-4 rounded-3xl' src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690302/elewa-group-website/Images/unnamed_1_m3dvll.png' alt='mind'/>

    </div>
</div>
  )
}

export default Knowledge