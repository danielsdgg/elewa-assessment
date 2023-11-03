import React from 'react'

const Beyond = () => {
  return (
    // Creating and adding stylings to our 'beyond' section then exporting the function to the main page of Social Impacts page which is located at 'social.tsx'
    <div className='w-full bg-white py-16 px-4'>
    <div className='max-w-[100%] mx-auto grid md:grid-cols-2'>
        <img className='rounded-3xl w-[500px] mx-auto my-4' src='https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,q_90,w_400/v1675690301/elewa-group-website/Images/IMG_0764_twyo3k.png' alt='imagery'/>
        <div className='flex flex-col justify-center text-white'>
            <h2 className='font-semibold py-2 md:text-6xl sm:text-3xl text-2xl'>Beyond business</h2>
            <p className='text-black ms-1 block'>
            We channel a good amount of our resources into giving back.
            </p>
            <p className='text-black ms-1 block'>
                Through projects such as our coding school in Kakuma refugee camp,training teachers in pastoral Samburu and our open-source coding initiatives providing entry-level opportunities to hundreds of junior engineers
            </p>
            <p className='text-black ms-1 block'>These projects don't necessarily have an immediate financial return, but their impact can be tangibly measured in the long-term</p>
        </div>
    </div>
</div>
    
  )
}

export default Beyond