import React from 'react'

const Footer = () => {
  return (
    <div>
    <footer className="bg-black text-white pb-2% max-md:pt-20% flex flex-row justify-between my-10">
        <div className=" max-md:flex pb-30px"><br />
        <hr />
        <div className="flex justify-between max-md:block">
            <div className="flex flex-col text-white md:block pb-30px">
                <h3 className="h3">Headquarters</h3> <br />
                <p></p>
                <p>The promenade, 19 General</p>
                <p>Mathenge road</p>
                <p>Nairobi, Kenya</p>
                <p />

            </div>
        <div className="flex flex-col text-white md:flex pb-30px">
            <h3 className="h3">Contact</h3><br />
            <p></p>
            <p>T +254 78 92 27 755</p>
            <p>E info@elewa.co.ke</p>
            <p />
        </div>
        <div className="flex flex-col text-white md:flex pb-30px">
            <h3 className="h3">Navigation</h3><br />
            <p></p>
            <p>Projects</p>
            <p>Company</p>
            <p>News</p>
            <p>Contact</p>
            <p />
        </div>
        <div className="flex flex-col text-white md:flex pb-30px">
            <h3 className="h3">Solutions</h3><br />
            <p></p>
            <p>Consultancy</p>
            <p>Content development</p>
            <p>Conversational Learning</p>
            <p>Booklets</p>
            <p />
        </div>
        <div className="flex flex-col text-white md:block pb-30px">
            <h3 className="h3">Privacy</h3><br />
            <p></p><p>Terms and conditions</p>
            <p>Cookie and preferences</p>
            <p />
        </div> 
        </div>
        <div className="bottom-images">
            <img src="https://res.cloudinary.com/ddei3mzex/image/upload/v1698922465/Logo_White_arvoyx_h9kx9y.svg" width="90px" height="25px" className="bg-white float-left" alt="/" />
            <div className="float-right">
                <div className="bg-white flex flex-row justify-evenly max-md:flex p-5%">
                    <a href="https://www.facebook.com/" className='m-10px justify-evenly'><i className="fa fa-facebook" style={{color: 'white'}} /></a>
                    <a href="https://www.instagram.com/" className='m-10px justify-evenly'><i className="fa fa-instagram" style={{color: 'white'}} /></a>
                    <a href="https://www.linkedin.com/" className='m-10px justify-evenly'><i className="fa fa-linkedin" style={{color: 'white'}} /></a>
                </div> 
            </div>
        </div>
        </div>
    </footer>

</div>
  )
}

export default Footer