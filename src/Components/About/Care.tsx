import React from 'react'

const Care = () => {
  return (
    // Creating and adding stylings to our 'care' section then exporting the function to the main page of About page which is located at 'about.tsx'
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[100%] mx-auto grid md:grid-cols-2'>
            <div className='flex flex-col justify-center text-black'>
                <h2 className='font-semibold py-2 md:text-6xl sm:text-3xl text-2xl'>We care!</h2>
                <p>
                    Elewa is a mission-driven organization. We make use of our cooperative and shared culture to drive the needle for the development of people and environment. We care about our growth, but also care deeply about the context surrounding us.  
                </p>
            </div>
            <div className='flex flex-col justify-center text-black'>
                <p>
                    Our investments are therefore not limited to internal ones, but contribute heavily to our community and environment. From training the next scout leaders on sustainable practices, to bridging the employment gap for junior software developers.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Care