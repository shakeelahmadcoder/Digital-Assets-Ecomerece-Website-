import React from 'react'
import { FaFacebook, FaInstagram, FaMessage, FaPinterest, FaTwitter } from 'react-icons/fa6'

const Signup = () => {
  return (
    <div className='flex flex-col py-8 gap-4 justify-center items-center border-t'>
        <h1 className='text-xl'>Sing Up for the <span className='text-xl font-bold'>NEWSLETTER</span></h1>
        <form className=''>
            <div className="flex">
            <input placeholder='Enter Your Email ' type="text" className='p-2 px-4 rounded-l-full border '/>
            <button className='text-white font-bold py-2 px-4 rounded-r-full bg-[#D10024] flex justify-center items-center gap-2 '><span><FaMessage/></span>Subscribe</button>
            </div>
        </form>
        <div className="icons flex gap-4">
    <FaFacebook className='border p-4 w-12 h-12'/>
    <FaTwitter className='border p-4 w-12 h-12'/>
    <FaInstagram className='border p-4 w-12 h-12'/>
    <FaPinterest className='border p-4 w-12 h-12'/>
</div>
<hr className='border border-[#D10024]'/>
<hr className='border border-[#D10024]'/>
    </div>
    
  )
}

export default Signup