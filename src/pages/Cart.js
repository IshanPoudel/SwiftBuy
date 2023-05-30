import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem';
import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";

const Cart = () => {
  // Get productdata

  const productData = useSelector((state)=> state.bazar.productData);
  const userInfo = useSelector((state)=>state.bazar.userInfo);
  const [payNow , setPayNow] = useState(false);

  const handleCheckout=()=>
  {
    if(userInfo){
      setPayNow(true);
    }
    else
    {
      toast.error("Please sign in to Checkout");

    }
  }


  const [totalAmt , setTotalAmt] = useState("");

  useEffect(()=>
  {
    let price=0;
    productData.map((item)=>{
      price+= item.price * item.quantity ;
      return price;
    })

    setTotalAmt(price);

  } , [productData])
  console.log(productData);
  

  return (
    <div>
      <img
        className="w-full h-60 object-cover"
        src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="cartImg"
      />
      <div className='max-w-screen-xl mx-auto py-auto flex'>
        <CartItem/>
        <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
          <div>
            <h2 className='text-2xl font-bold'> Cart Totals </h2>
            <p className='font-titleFont font-bold text-lg'>${totalAmt}</p>
            {/* fOR SHIPPING GET THE SHIPPING ADDRESS */}
            <p className='flex items-start gap-4 text-base'>
              Shipping{""}
              <input className='block w-full bg-white border border-gray-300' type='text' defaultValue={"Enter Shipping Address"}></input>
            </p>
          </div>
          <p className="font-titleFont font-semibold flex justify-between mt-6">
              Total <span className="text-xl font-bold">{totalAmt}</span>
          </p>
          <button onClick={handleCheckout} className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300">
            Proceed to Checkout
          </button>

          
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    
    </div>
  )
}

export default Cart