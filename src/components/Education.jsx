import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'

const Education = () => {
  const ref=useRef(null);
  const isInView=useInView(ref,{
    once:"true"
  });

  const education=[
    {
      degree:'Bachelor of Technology in Information Technology',
      school:'Guru Gobind Singh Indraprastha University, New Delhi, India',
      marks:'CGPA: 9.5',
      YOP:'2020-2024'
    },
    {
      degree:'Senior Secondary',
      school:'Central Board of Secondary Education, India',
      marks:'Scored 91% in PCM (Non-medical) with Computer Science',
      YOP:'2019'
    },
    {
      degree:'Secondary',
      school:'Central Board of Secondary Education, India',
      marks:'CGPA: 9.2',
      YOP:'2017'
    },
  ]
  return (
    <div className='relative top-[27rem] p-5 mb-8'>
      <div ref={ref} id="headingContainer" className='w-full h-auto flex flex-col items-center justify-center mb-10'>
        <h1 className='text-4xl font-bold text-center text-deep-blue mb-1'>Education</h1>
        <hr  className='h-1 w-20 bg-lime-green'/>
      </div>
      {education.map((items)=>(
        <motion.div
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s"
        }}
        id="educationHistory" className='w-full h-auto px-20 mb-10'>
          <h1 className='w-full text-2xl michroma-regular mb-3'>{items.degree}</h1>
          <h4 className='text-lg '>{items.school}</h4>
          <h4 className='font-semibold'>{items.marks}</h4>
          <h4 className='font-bold'>{items.YOP}</h4>
        </motion.div>
      ))}
    </div>
  )
}

export default Education