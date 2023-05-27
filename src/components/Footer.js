import React from 'react'
import {ImGithub} from 'react-icons/im'
import { FaFacebookF , FaTwitter,FaInstagram, FaYoutube , FaHome } from 'react-icons/fa'
import { paymentoptions, bagOnly } from '../assets'
import {MdLocationOn} from 'react-icons/md'
import {BsPersonFill , BsPaypal} from 'react-icons/bs'
import { LogoLight , PaymentLogo } from '../assets'

const Footer = () => {
  return (
    <div className='bg-black text-[#949494] py-10 font-titleFont'> {/* Adjusted the padding from py-20 to py-10 */}
    <div className='max-w-screen-xl mx-auto grid grid-cols-4 ' >
      {/*================= Logo and Payment options start here==================== */}
      <div className='flex flex-col gap-4'> {/* Adjusted the gap from gap-7 to gap-4 */}
        <img className='w-12 h-12' src={bagOnly} alt='logoLight' />
        <p className='text-white text-sm tracking-wide'>Made Using React</p>
        <img className='w-64 h-32' src={paymentoptions} alt='PaymentLogo' />
        <div className='flex gap-5 text-lg text-gray-400' >
            <ImGithub className='hover:text-white duration-300 cursor-pointer'/>
            <FaFacebookF className='hover:text-white duration-300 cursor-pointer'/>
            <FaTwitter className='hover:text-white duration-300 cursor-pointer'/>
            <FaInstagram className='hover:text-white duration-300 cursor-pointer'/>
            <FaYoutube className='hover:text-white duration-300 cursor-pointer'/>

        </div>
      </div>
      {/*================= Logo and Payment options end here==================== */}
      {/*================= Business details  start here ======================== */}
      <div >
        <h2 className='text-2xl font-semibold text-white mb-4'> Locate us </h2>
        <div className='text-base flex flex-col gap-2'>
            <p>Dallas Business Cenrtre</p>
            <p> Contact us: +1 405-981-8094  </p>
            <p> E-mail: customer-service@swfitbuy.com</p>
        </div>
      
      </div>
      {/*================= Business details end here ======================== */}
      {/*================= My Account details  start here ======================== */}
      <div>
        <h2 className='text-2xl font-semibold text-white mb-4'> Profile </h2>
        <div className='flex flex-col gap-3  '>
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                <span>
                    <BsPersonFill/>

                </span>{" "}
                My Account
            </p> 
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                <span>
                    <BsPaypal/>

                </span>{" "}
                Checkout
            </p> 
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                <span>
                    <FaHome/>

                </span>{" "}
                Order Tracking
            </p> 
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                <span>
                    <MdLocationOn/>

                </span>{" "}
                Help&Support
            </p> 
         
        </div>


      </div>
      {/*================= Subscription Starts here======================== */}
      <div className='flex flex-col justify-center gap-2' >
        <p > Subscribe for great deals!</p>
        <input className='bg-transparent border px-4 py-2 text-sm' placeholder='Email' type='text'/>
        <button className='text-sm border text-white border-t-1 hover:bg-gray-900 active:bg-white active:text-black'> Subscribe</button>
         
      </div>
    




    </div>
  </div>
  
  )
}

export default Footer