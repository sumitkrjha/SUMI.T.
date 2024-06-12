import React from 'react'

const About = () => {
  return (
    <>
        <div id="aboutContainer" className='absolute h-[662px] w-full bg-blue-violet flex items-start pt-36'>
          <div id="aboutwrapper" className='h-auto w-full px-48 flex flex-col justify-center items-center'>
              <h1 id="heading" className='text-white font-bold text-center text-3xl mb-5'>Hi, I'm Sumit Kumar Jha. Nice to meet you.</h1>
              <p id="aboutMe" className='text-white '>
              <span className=' font-medium text-lg text-justify block px-24'>
              Built OsteoAI, an AI-powered medical app for bone analysis using ReactJS, Tailwind CSS, and MongoDB. JWT auth ensures user security. <br />

              Contributed to GDSC JSSSTU's project during HacktoberFest 2023 (5 merged PRs). Built user interfaces and integrated Firebase for authentication. <br />

              Skilled in various APIs (OpenAI) and UI libraries (Material UI, Chakra UI). Eager to learn and tackle new challenges! <br />
              </span>
              </p>
          </div>
        </div>
    </>
  )
}

export default About