import React from 'react'

const Mindset = () => {
  return (
    <div className='w-full bg-gray-100 py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <div className='flex flex-col justify-center text-black'>
                <h2 className='font-semibold py-2 md:text-6xl sm:text-3xl text-2xl'>A cooperative mindset</h2>
                <p>
                    Elewa has one shared objective; To unlock the true potential of individuals, teams, and the community. We believe strongly in the power of sharing ideas and continuously strive to grow each other and ourselves.Internally, but also within the larger communities in which we are active.
                </p>
            </div>
            <img className='w-[500px] mx-auto my-4' src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1681308135/buffelo_i60xeu.jpg' alt='mind'/>

        </div>
    </div>
  )
}

export default Mindset