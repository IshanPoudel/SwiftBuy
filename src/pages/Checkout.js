import React from 'react';
import ShippingForm from '../components/ShippingForm';

import { ToastContainer, toast } from "react-toastify";
import {useState} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios, { Axios } from 'axios';


const Checkout = () => {

    const [isValid , setValid]= useState(false)



    const [shippingInfo , setShippingInfo]=useState({
        fullName: '',
        address: '',
        aptNumber: '',
        city: '',
        postalCode: '',
        phoneNumber: '',
        email: ''
    })



    


    const handleChange = (e) => {
        setShippingInfo({
          ...shippingInfo,
          [e.target.name]: e.target.value,
        });
    };

    const validate = () => {
        
        const errors = {};
      
        // Validate fullName
        if (shippingInfo.fullName.trim() === '') {
          errors.fullName = 'Full name is required';
        }
      
        // Validate address
        if (shippingInfo.address.trim() === '') {
          errors.address = 'Address is required';
        }
      
        // Validate city
        if (shippingInfo.city.trim() === '') {
          errors.city = 'City is required';
        }
      
        // Validate postalCode
        if (shippingInfo.postalCode.trim() === '') {
          errors.postalCode = 'Postal code is required';
        }
      
        // Validate phoneNumber
        if (shippingInfo.phoneNumber.trim() === '') {
          errors.phoneNumber = 'Phone number is required';
          
        }
      
        // Validate email
        if (shippingInfo.email.trim() === '') {
          errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(shippingInfo.email)) {
          errors.email = 'Invalid email format';
        }
      
        // Handle the errors
        if (Object.keys(errors).length == 0) {
            setValid(true)
          }
        else
        {
           
            console.log('Validation errors:', errors);
            Object.values(errors).map((message)=> toast.error(message));
              
        }
      
        
      };
      

    const handleSubmit = (e) =>
    {
        // Need to validate if all forms are written except optional apt number
        e.preventDefault();
        console.log("I clicked the button");
        // Check if all the shipping info is correct. 
        console.log(shippingInfo);
        validate();
        

    }

    // This page is only loaded if usercan pay now

    // Calculate total amount payable
    const [totalAmt , setTotalAmt] = useState("");

    // Get global data  productData and userInfo
    const productData = useSelector((state)=> state.bazar.productData);
    const userInfo = useSelector((state)=>state.bazar.userInfo)


    useEffect(()=>
    {
      let price=0;
      productData.map((item)=>{
        price+= item.price * item.quantity ;
        return price;
      })
  
      setTotalAmt(price);
  
    } , [productData])

    const payment = async(token)=>{
        
        await axios.post("http://localhost:8000/pay" , {
            amount: totalAmt * 100 , 
            token : token

        })

        

    }



  return (
    <div className='flex flex-row gap-10'>

        <ShippingForm shippingInfo={shippingInfo} setValue={handleChange} handleSubmit={handleSubmit}/>
        {isValid && <p>You can proceed to checkout </p>}

        {isValid && <StripeCheckout stripeKey='pk_test_51NDUhcCxQUsAxKRK6JQM9fauwmJLIpKiY4GPzHa8K97BYKVXEztwwjT0FVbpFkoEnMzKBvoBj8k0mlnCxhaHzvhW00VgonGphX'
          name='SwiftBuy' amount={totalAmt*100} label='Pay to SwiftBuy' description= {`Your total amount is $${totalAmt}`} 
          token={payment} email={userInfo.email}>

        </StripeCheckout>}
        


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

export default Checkout;