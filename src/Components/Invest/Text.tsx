import React from 'react'

const Text = () => {
  return (
    // Creating and adding stylings to our 'text' section then exporting the function to the main page of Invest page which is located at 'invest.tsx'
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[100%] mx-auto grid md:grid-cols-2'>
            <div className='flex flex-col justify-center text-black'>
                <h2 className='font-semibold py-2 md:text-6xl sm:text-3xl text-2xl'>How we see it differently</h2>
                <p className='pt-16'>
                    The global South is rapidly catching up with the "developed" world. It's time for you to get to know the rapid development, innovation and drive going on in this part of the world (East-Africa, South Asia and beyond).  
                </p>
            </div>
        </div>
    </div>
  )
}

export default Text