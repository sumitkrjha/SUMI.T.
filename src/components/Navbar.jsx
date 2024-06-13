import React from 'react'

const Navbar = () => {
    const menuStyle='font-medium text-lg text-deep-blue hover:text-blue-violet cursor-pointer hover:translate-y-2';
  return (
    <>
        <div id="navbarWrapper" className='sticky h-36 w-full py-5'>
            <div id="navbarContainer" className='h-full w-full flex px-12 '>
                <div id="logoContainer" className='h-full w-1/5 pl-3 text-3xl michroma-regular flex items-center justify-start cursor-pointer hover:scale-95 '>SUM <span className='w-20 pl-2 bg-blue-violet text-white comeSlowAnimation'> I.T.</span>  </div>
                <div id="menuContainer" className='h-full w-4/5 pr-5 flex gap-6 items-center justify-end '>
                    <ul className='flex gap-3'>
                        <li className={menuStyle}>About</li>
                        <li className={menuStyle}>Projects</li>
                        <li className={menuStyle}>Education</li>
                        <li className={menuStyle}>OpenSource</li>
                    </ul>
                    <button className='h-12 w-32 p-3 border-2 border-blue-violet rounded-3xl flex items-center justify-center font-semibold text-lg text-blue-violet hover:bg-blue-violet hover:text-white hover:shadow-md hover:shadow-blue-violet active:translate-y-1'>Contact Me</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar