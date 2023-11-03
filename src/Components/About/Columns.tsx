import React from 'react'

const Columns = () => {
  return ( 
    // Creating and adding stylings to our 'columns' section then exporting the function to the main page of About  page which is located at 'about.tsx'
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[100%] mx-auto grid md:grid-cols-3 justify-between '>
            <div className='flex flex-col justify-center text-black'>
            <img className='w-[120px] mx-auto my-4' src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1680180166/elewa-group-website/Icons/PNG/Holistic_118_ylipr0.png' alt='/'/>
            <h2 className='font-bold'> Holistic solutions</h2>
                <p>
                We go beyond a simple patch-up but develop lasting solutions through holistic design.      
                </p>
            </div>
            <div className='flex flex-col justify-center text-black'>
                <img className='w-[120px] mx-auto my-4' src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Icons/PNG/coorperative_kzlzrg.png' alt='/'/>
                <h2 className='font-bold'>Impact</h2>
                <p>
                    Impact as a direct, or indirect, result. All our respective organizations have underlying theories of change.      
                </p>
            </div>
            <div className='flex flex-col justify-center text-black'>
                <img className='w-[120px] mx-auto my-4' src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690299/elewa-group-website/Icons/PNG/Opendata_fe7h3j.png' alt='/'/>
                <h2 className='font-bold'>Open data</h2>
                <p>
                    Sharing is caring. We share what we learn. As proof, we've open-sourced all our internal projects.     
                </p>
            </div>
        </div>
    </div>
  )
}

export default Columns