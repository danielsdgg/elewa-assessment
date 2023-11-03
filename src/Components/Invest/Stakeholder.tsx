import React from 'react'

const Stakeholder = () => {
  return (
    // Creating and adding stylings to our 'stakeholder' section then exporting the function to the main page of Invest page which is located at 'invest.tsx'
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[100%] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] rounded-3xl mx-auto my-4' src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690303/elewa-group-website/Images/IMG_6523_vabpyo.png' alt='imagery'/>
            <div className='flex flex-col justify-center text-black'>
                <h2 className='font-semibold py-2 md:text-5xl sm:text-3xl text-2xl'>Elewa NV, a multi-stakeholder cooperation</h2>
                <p>
                    At the heart of Elewa lies the structure Elewa NV. Based in Brussels, Belgium, Elewa NV is a private holding company which controls the assets of all Elewa activities.
                </p>
                <p>
                    Elewa NV is owned and controlled by Elewa's founder, a small community of investors which share in the vision of Elewa and Elewa employees based throughout the activities of the group.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Stakeholder