import React from 'react';
import { useSearchParams } from 'react-router-dom';
import {useState} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
const ShippingForm = ({shippingInfo , setValue , handleSubmit}) => {
    

   

    
    
  return (
    <div className='flex flex-row items-center '>
        <div className='flex flex-col items-left w-1/3 gap-10 ml-10'>
            <form onSubmit={handleSubmit}>
                <label className='block mb-4'>
                    <span clasName='text-gray-700'>Full Name:</span>
                    <input className='block w-full mt-1 p-2 border border-gray-500 rounded-md focus:outline-none focus:ring foucs:border-blue-300' type='text' name='fullName' value={shippingInfo.fullName} 
                    onChange={setValue} required></input>
                </label>

                <label className='block mb-4'>
                    <span clasName='text-gray-700'>Address:</span>
                    <input className='block w-full mt-1 p-2 border border-gray-500 rounded-md focus:outline-none focus:ring foucs:border-blue-300' type='text' name='address' value={shippingInfo.address} 
                    onChange={setValue} required></input>
                </label>

                <label className='block mb-4'>
                    <span clasName='text-gray-700'>Apartment Number (If any):</span>
                    <input className='block w-full mt-1 p-2 border border-gray-500 rounded-md focus:outline-none focus:ring foucs:border-blue-300' type='text' name='aptNumber' value={shippingInfo.aptNumber} 
                    onChange={setValue} ></input>
                </label>

                <label className='block mb-4'>
                    <span clasName='text-gray-700'>City:</span>
                    <input className='block w-full mt-1 p-2 border border-gray-500 rounded-md focus:outline-none focus:ring foucs:border-blue-300' type='text' name='city' value={shippingInfo.city} 
                    onChange={setValue} required></input>
                </label>

                <label className='block mb-4'>
                    <span clasName='text-gray-700'>Postal Code:</span>
                    <input className='block w-full mt-1 p-2 border border-gray-500 rounded-md focus:outline-none focus:ring foucs:border-blue-300' type='text' name='postalCode' value={shippingInfo.postalCode} 
                    onChange={setValue} required></input>
                </label>

                <label className='block mb-4'>
                    <span clasName='text-gray-700'>Phone Number:</span>
                    <input className='block w-full mt-1 p-2 border border-gray-500 rounded-md focus:outline-none focus:ring foucs:border-blue-300' type='text' name='phoneNumber' value={shippingInfo.phoneNumber} 
                    onChange={setValue} required></input>
                </label>

                <label className='block mb-4'>
                    <span clasName='text-gray-700'>Email</span>
                    <input className='block w-full mt-1 p-2 border border-gray-500 rounded-md focus:outline-none focus:ring foucs:border-blue-300' type='text' name='email' value={shippingInfo.email} 
                    onChange={setValue} required></input>
                </label>




            </form>

        </div>
        <div className='ml-20 grid grid-flow-row'>
          <button onClick={handleSubmit} className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300">
            Submit
          </button>

          


        </div>
    </div>
  )
}

export default ShippingForm