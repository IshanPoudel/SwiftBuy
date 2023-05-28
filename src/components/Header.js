import React from 'react'
import { bagOnly,  shoppingbag } from '../assets';
import { textOnly } from '../assets';
const Header = () => {
  return (
    <div className="w-full h-15 bg-white border-b-[1px] border-b-gray-800 sticky top-0 z-50">
        <div className="max-screen-xl  mx-auto my-4 px-20 flex items-center justify-between">
        <div>
            <ul className="flex items-center gap-8">
                <img className="w-12" src={bagOnly} alt="Logo" />
                <img className="w-60" src={textOnly} alt="Logo" />

            </ul>
            
        </div>
        <div>
           
        </div>
        <ul className="flex items-center gap-8">
            <li className='text-3xl text-black font-bold hover:text-blue-900 font-titlefont hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300' >Home</li>
            <li className='text-3xl text-black font-bold hover:text-blue-900 font-titlefont hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300' >Pages</li>
            <li className='text-3xl text-black font-bold hover:text-blue-900 font-titlefont hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Shop</li>
            <li className='text-3xl text-black font-bold hover:text-blue-900 font-titlefont hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Element</li>
            <li className='text-3xl text-black font-bold hover:text-blue-900 font-titlefont hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Blog</li>
        </ul>
        <div className='relative'>
            <img src={shoppingbag} width='100' heigth='100' alt='cartLogo'></img>
            <span className='absolute w-14 top-8 left-5 text-3xl flex items-center justify-center font-semibold ' >
                0
            </span>
        </div>
        {/* Have an img source */}

        </div>
  </div>
  



    
  )
}

export default Header;