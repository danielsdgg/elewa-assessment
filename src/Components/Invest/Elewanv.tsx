import React from 'react'

const Elewanv = () => {
  return (
    // Creating and adding stylings to our 'elewanv' section then exporting the function to the main page of Invest page which is located at 'invest.tsx'
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[100%] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] rounded-3xl mx-auto my-4' src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1679983082/elewa-group-website/Images/invest-now_ftxg4z.jpg' alt='imagery'/>
            <div className='flex flex-col justify-center text-black'>
                <h2 className='font-semibold py-2 md:text-5xl sm:text-3xl text-2xl'>Investing in Elewa NV</h2>
                <p>
                    From time to time, we offer investment opportunities (private equity & debt) to out community of investors. Interested to take part when this opportunity arrives?
                </p>
                <p className='pt-10'>
                    <button className='bg-black text-white justify-center rounded-xl border-2 border-black'>Join the waiting list</button> 
                </p>
            </div>
        </div>
    </div>
  )
}

export default Elewanv