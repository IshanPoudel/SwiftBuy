import React from 'react'
import ProductsCard from './ProductsCard'

const Products = ({products}) => {
  console.log("Products before being mapped")
  console.log(products )
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
      {/* ===========Contains actual products================ */}
      <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10'>
        {
          products.map(
            // Each item data has a unique id
            (item)=>(<ProductsCard key={item._id} product={item}/>)
          )
        }
        
      </div>
  </div>
  )
}

export default Products;