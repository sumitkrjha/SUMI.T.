import React from 'react'
import profilePhoto from "../assets/profilePhoto.png"
import heroDevices from "../assets/hero-devices.svg"
const Hero = () => {
  return (
    <>
        <div id="heroContainer" className='h-auto w-full pt-4'>
            <div id="heroHeader" className='p-5 flex flex-col items-center justify-center'>
                <h1 id="heading" className='mb-5 text-[38px] font-bold text-center text-deep-blue'>Software Engineer & MERN Stack Developer</h1>
                <h2 id="subheading" className='text-2xl font-medium text-center text-dark-gray'>I engineer with MERN: From Idea to Implementation</h2>
                <img src={profilePhoto} alt="Sumit Kumar Jha" className='h-72 w-72 bg-blue-violet rounded-full my-10'/>
            </div>
            <div id="heroFooter" className='px-5'>
                <div id="imageContainer" className='px-10 flex items-center justify-center'>
                    <img src={heroDevices} alt="" className='h-auto max-w-[860px]'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero