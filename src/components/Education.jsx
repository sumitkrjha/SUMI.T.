import React from 'react'

const Education = () => {

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
    <div className='relative top-[27rem] p-5'>
      <div id="headingContainer" className='w-full h-auto flex flex-col items-center justify-center mb-10'>
        <h1 className='text-4xl font-bold text-center text-deep-blue mb-1'>Education</h1>
        <hr  className='h-1 w-20 bg-lime-green'/>
      </div>
      {education.map((items)=>(
        <div id="educationHistory" className='w-full h-auto px-10 mb-10'>
          <h1 className='w-full text-2xl michroma-regular mb-5'>{items.degree}</h1>
          <h4 className='text-lg '>{items.school}</h4>
          <h4 className='font-semibold'>{items.marks}</h4>
          <h4 className='font-bold'>{items.YOP}</h4>
        </div>
      ))}
    </div>
  )
}

export default Education