import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { MdOutlineStar } from 'react-icons/md';

const Product = () => {

  const [details , setDetails]=useState({});

  const Location = useLocation();

  useEffect(()=>
  {
    console.log(Location.state.item)
    setDetails(Location.state.item)
  } , [Location]);
  return (
    <div>
      <div className='max-w-screen-xl mx-auto my-10 flex gap-10'>
        {/* Div for image */}
        <div className='w-2/5 relative'>
          <img className='w-full h-[550px] object-cover' src={details.image} alt='productImg' />
          {/* Div for sale tag */}
          <div className='absolute top-4 right-0'>
            {details.isNew && (
              <p className='bg-black text-white font-semibold font-titleFont px-8 py-1'>Sale</p>
            )}
          </div>
        </div>
  
        {/* Div for title and other details */}
        <div className='w-3/5 flex flex-col justify-center gap-12'>
          {/* Div for title and price */}
          <div>
            <h2 className='text-4xl font-semibold'>{details.title}</h2>
            {/* Div for price */}
            <div className='flex items-center gap-4 my-3'>
              <p className='line-through text-gray-500 text-2xl'>${details.oldPrice}</p>
              <p className='font-bold text-2xl'>${details.price}</p>
            </div>
          </div>
  
          {/* Div for reviews, description, and ordering */}
          <div className='flex flex-col gap-2'>
            {/* Put reviews and have that many stars */}
            <div className='flex text-base'>
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
            </div>
            <p className="text-xl text-gray-500 ">(1 Customer review)</p>

  
            {/* Description of the product */}
            <p className='text-xl text-gray-500'>{details.description}</p>
  
            {/* Div for ordering */}
            <div className='flex flex-col gap-4'>
              <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3'>
                <p className='text-xl'>Quantity</p>
                {/* Div for button */}
                <div className='flex items-center gap-4 text-sm font-semibold'>
                  <button className='border h-5 font-normal text-2xl flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>
                    -
                  </button>
                  <span>{1}</span>
                  <button className='border h-5 font-normal text-2xl flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>
                    +
                  </button>
                </div>
              </div>
              {/* Div for adding to cart */}
              <button className='bg-black text-white py-3 px-6 active:bg-gray-800'>
                Add To Cart
              </button>
            </div>
  
            {/* Description of category */}
            <p className='text-base text-gray-500'>
              Category:{" "}
              <span className='font-medium capitalize'>{details.category}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default Product