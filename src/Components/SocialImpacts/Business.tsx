import React from 'react'

const Business = () => {
  return (
    // Creating and adding stylings to our 'business' section then exporting the function to the main page of Social Impacts page which is located at 'social.tsx'
    <div className='w-full bg-black py-16 px-4'>
        <div className='max-w-[100%] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] rounded-3xl mx-auto my-4' src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1681306013/lady-impact_rnc9jy.jpg' alt='imagery'/>
            <div className='flex flex-col justify-center text-white'>
                <h2 className='font-semibold py-2 md:text-6xl sm:text-3xl text-2xl'>(Social) business for the win</h2>
                <p>
                With a young dynamic population that is eager to contribute to the global economy, East Africa has a lot to offer to the world. Now is the time to nurture sustainable, inclusive and scalable business. The rest will take care of itself.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Business