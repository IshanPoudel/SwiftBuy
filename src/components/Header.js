import React from 'react'
import { bagOnly,  shoppingbag , loginImage } from '../assets';
import { textOnly } from '../assets';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    
    const userInfo = useSelector((state)=>state.bazar.userInfo);
    const productData = useSelector((state)=>state.bazar.productData);
    console.log(productData)
    console.log(userInfo);

  return (
    <div className="w-full h-15 bg-white border-b-[1px] border-b-gray-800 sticky top-0 z-50">
        <div className="max-screen-xl  mx-auto my-4 px-20 flex items-center justify-between">
        <div>
            <ul className="flex items-center gap-8">
                <Link to='/'>
                <img className="w-12" src={bagOnly} alt="Logo" />
                </Link>
                
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
        <Link to='/cart'>
            <div className='relative'>
                <img src={shoppingbag} width='100' heigth='100' alt='cartLogo'></img>
                <span className='absolute w-14 top-8 left-5 text-3xl flex items-center justify-center font-semibold ' >
                    {productData.length}
                </span>
            </div>
        </Link>
        <Link to='/login'>
           <img  className='w-8 h-8 rounded-full' src={userInfo && userInfo.image } alt = {loginImage}></img>
           {userInfo && <p className='text-base font-titleFont font-semibold underline underline-offset-2'>{userInfo.name}</p>}

        </Link>
        
        {/* Have an img source */}

        </div>
  </div>
  



    
  )
}

export default Header;
