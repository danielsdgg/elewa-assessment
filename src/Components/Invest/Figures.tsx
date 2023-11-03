import React from 'react'

const Figures = () => {
  return (
    // Creating and adding stylings to our 'figures' section then exporting the function to the main page of Invest page which is located at 'invest.tsx'
    <div className=''>
        <h2>Key figures</h2>
        <div className='flex justify-center grid-cols-4'>
            <div className='rounded-xl border-4 border-black'>
                <h2>1.3M</h2>
                <p>
                    Approx. number of Kenyan talents reaching the age of 18 in 2022
                </p>
            </div>
            <div className='rounded-xl border-4 border-black'>
                <h2>5M</h2>
                <p>
                    number of East-Africans(EAC) reaching the age of 18 in 2022
                </p>
            </div>
            <div className='rounded-xl border-4 border-black'>
                <h2>2022</h2>
                <p>
                    Democratic Republic of Congo joins the East African Community
                </p>
            </div>
            <div className='rounded-xl border-4 border-black'>
                <h2>1.5M</h2>
                <p>
                    The number of unfilled IT vacancies in the US and EU markets
                </p>
            </div>
            </div>
            <div className='flex justify-center grid-cols-4'>
            <div className='rounded-xl border-4 border-black'>
                <h2>10M</h2>
                <p>Number of technical vacancies by 2030</p>
            </div>
            <div className='rounded-xl border-4 border-black'>
                <h2>2050</h2>
                <p>
                    Africa holds the worlds largest workforce
                </p>
            </div>
            <div className='rounded-xl border-4 border-black'>
                <h2>$4.6M</h2>
                <p>Startup funding raised by African startups in 2022</p>

            </div>
            <div className='rounded-xl border-4 border-black'>
                <h2>310%</h2>
                <p>Increase in startup funding for companies with HQ in Kenya</p>

            </div>
            </div>
        </div>
  )
}

export default Figures