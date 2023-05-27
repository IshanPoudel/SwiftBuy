import React from 'react'

const Products = () => {
  return (
    <div className='py-10'>
    <div className='flex flex-col items-center gap-4'>
      <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>Shopping Everyday</h1>
      <div className='w-80 h-[3px] bg-black'></div> {/* Replace the <span> tag with a <div> tag */}
      <p className='max-w-[700px] text-gray-600 text-center'>
        At SwiftBuy, we are committed to sourcing our materials ethically and responsibly, ensuring that each product you purchase not only meets your expectations 
        but also aligns with your values. 
      </p>
    </div>
    <div className='max-w-screen-xl mx-auto'>
      
    </div>
  </div>
  )
}

export default Products;