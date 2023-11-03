import React,{useState} from 'react';
import { Link } from 'react-router-dom';


// beginning of creating the navbar view and functionality
const Navbar = () => {

    const [nav, setNav] = useState(false)
    
    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='nav backdrop-filter md:backdrop-brightness-90 flex justify-between items-center h-24 w-full mx-auto px-4 text-white'>
        <span className=''>
            <img src='https://res.cloudinary.com/ddei3mzex/image/upload/v1698922465/Logo_White_arvoyx_h9kx9y.svg' alt='logo'/>
        </span>
        <ul className='hidden md:flex'>
            <Link to={'/'}><li className='p-5 font-light cursor-pointer'>Social Impact</li></Link>
            <Link to={'/about'}><li className='p-5 font-light cursor-pointer'>About Us</li></Link>
            <Link to={'/invest'}><li className='p-5 font-light cursor-pointer'>Invest</li></Link>
        </ul>
        <div className='block md:hidden cursor-pointer' onClick={handleNav}>
            
        </div>
    </div>
  )
}

export default Navbar