import React from 'react'
import { MdLocalPhone } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <>
    <footer className='bg-[#1E1F29] text-white'>
        <div className="container mx-8 sm:mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-8 justify-center ">
          {/* about */}
          <div>
            <h1 className='text-xl font-bold'>ABOUT US</h1>
            <p>We are here to sell you all types of digital </p>
                <div className=" my-3 flex flex-col gap-4 ">
                    {/* phone */}
                    <div className="flex items-center gap-2">
                <MdLocalPhone className='text-[#D10024] font-bold text-sm'/>
                <p className='hover:text-red-700  text-white  cursor-pointer text-sm'> +021-95-51-84</p>
                    </div>
                    {/* email */}
                    <div className="flex items-center gap-2">
                <MdOutlineMailOutline className='text-[#D10024] font-bold text-sm'/>
                <p className='hover:text-red-700  text-white  cursor-pointer text-sm'> email@email.com</p>
                    </div>
                    {/* location*/}
                    <div className="flex items-center gap-2">
                <MdOutlineLocationOn className='text-[#D10024] font-bold text-sm'/>
                <p className='hover:text-red-700  text-white  cursor-pointer text-sm'> 1734 Stonecoal Road</p>
                    </div>

                </div>

                
        
          </div>

          {/* cateogires */}
          <div>
            <h1 className='text-xl font-bold'>CATEGOIRES</h1>
            <div className=" flex flex-col gap-4   py-4 text-white shadow-md  top-0 h-full">
    {/* <div className="group">
    <Link to="/" className=" text-gray-300 text-sm relative hover:text-[#D10024]"> Home<span className="absolute left-0 bottom-0 w-0 h-1 bg-[#D10024] transition-all top-5 duration-300 group-hover:w-full"></span></Link>
    </div> */}
    <div className="group">
    <Link to="/hotdeals" className=" text-gray-300 text-sm relative hover:text-[#D10024]"> Hot Deals<span className="absolute left-0 bottom-0 w-0 h-1 bg-[#D10024] transition-all top-5 duration-300 group-hover:w-full"></span></Link>
    </div>
    <div className="group">
    <Link to="/categories" className=" text-gray-300 text-sm relative hover:text-[#D10024]"> Categories<span className="absolute left-0 bottom-0 w-0 h-1 bg-[#D10024] transition-all top-5 duration-300 group-hover:w-full"></span></Link>
    </div>
    <div className="group">
    <Link to="/laptops" className=" text-gray-300 text-sm relative hover:text-[#D10024]"> Laptops<span className="absolute left-0 bottom-0 w-0 h-1 bg-[#D10024] transition-all top-5 duration-300 group-hover:w-full"></span></Link>
    </div>
    <div className="group">
    <Link to="/smartphones" className=" text-gray-300 text-sm relative hover:text-[#D10024]"> Smpartphones<span className="absolute left-0 bottom-0 w-0 h-1 bg-[#D10024] transition-all top-5 duration-300 group-hover:w-full"></span></Link>
    </div>
    <div className="group">
    <Link to="/cameras" className=" text-gray-300 text-sm relative hover:text-[#D10024]"> Cameras<span className="absolute left-0 bottom-0 w-0 h-1 bg-[#D10024] transition-all top-5 duration-300 group-hover:w-full"></span></Link>
    </div>
  
    
    </div>
          </div>

          {/* Information */}
          <div>
            <h1 className='text-xl font-bold'>INFORMATION</h1>
            <div className=" flex flex-col gap-4   py-4 text-white shadow-md  top-0 h-full">
    {/* <div className="group">
    <Link to="/" className=" text-gray-300 text-sm relative hover:text-[#D10024]"> Home<span className="absolute left-0 bottom-0 w-0 h-1 bg-[#D10024] transition-all top-5 duration-300 group-hover:w-full"></span></Link>
    </div> */}
    <div className="group">
    <Link to="/aboutus" className=" text-gray-300 text-sm relative hover:text-[#D10024]"> About Us<span className="absolute left-0 bottom-0 w-0 h-1 bg-[#D10024] transition-all top-5 duration-300 group-hover:w-full"></span></Link>
    </div>
    <div className="group">
    <Link to="/contact" className=" text-gray-300 text-sm relative hover:text-[#D10024]"> Contact Us<span className="absolute left-0 bottom-0 w-0 h-1 bg-[#D10024] transition-all top-5 duration-300 group-hover:w-full"></span></Link>
    </div>
    <div className="group">
    <Link to="/privacypolicy" className=" text-gray-300 text-sm relative hover:text-[#D10024]"> Privacy Policy<span className="absolute left-0 bottom-0 w-0 h-1 bg-[#D10024] transition-all top-5 duration-300 group-hover:w-full"></span></Link>
    </div>
    <div className="group">
    <Link to="/orders" className=" text-gray-300 text-sm relative hover:text-[#D10024]"> Orders and Returns<span className="absolute left-0 bottom-0 w-0 h-1 bg-[#D10024] transition-all top-5 duration-300 group-hover:w-full"></span></Link>
    </div>
    <div className="group">
    <Link to="/terms" className=" text-gray-300 text-sm relative hover:text-[#D10024]"> Terms & Conditions<span className="absolute left-0 bottom-0 w-0 h-1 bg-[#D10024] transition-all top-5 duration-300 group-hover:w-full"></span></Link>
    </div>
  
    
    </div>
          </div>
          {/* Services */}
          <div>
            <h1 className='text-xl font-bold'>SERVICES</h1>
            <div className=" flex flex-col gap-4   py-4 text-white shadow-md  top-0 h-full">
    {/* <div className="group">
    <Link to="/" className=" text-gray-300 text-sm relative hover:text-[#D10024]"> Home<span className="absolute left-0 bottom-0 w-0 h-1 bg-[#D10024] transition-all top-5 duration-300 group-hover:w-full"></span></Link>
    </div> */}
    <div className="group">
    <Link to="/aboutus" className=" text-gray-300 text-sm relative hover:text-[#D10024]"> My Account<span className="absolute left-0 bottom-0 w-0 h-1 bg-[#D10024] transition-all top-5 duration-300 group-hover:w-full"></span></Link>
    </div>
    <div className="group">
    <Link to="/contact" className=" text-gray-300 text-sm relative hover:text-[#D10024]"> View Cart<span className="absolute left-0 bottom-0 w-0 h-1 bg-[#D10024] transition-all top-5 duration-300 group-hover:w-full"></span></Link>
    </div>
    <div className="group">
    <Link to="/privacypolicy" className=" text-gray-300 text-sm relative hover:text-[#D10024]"> Wishlist<span className="absolute left-0 bottom-0 w-0 h-1 bg-[#D10024] transition-all top-5 duration-300 group-hover:w-full"></span></Link>
    </div>
    <div className="group">
    <Link to="/orders" className=" text-gray-300 text-sm relative hover:text-[#D10024]"> Tack My Order<span className="absolute left-0 bottom-0 w-0 h-1 bg-[#D10024] transition-all top-5 duration-300 group-hover:w-full"></span></Link>
    </div>
    <div className="group">
    <Link to="/terms" className=" text-gray-300 text-sm relative hover:text-[#D10024]"> Help<span className="absolute left-0 bottom-0 w-0 h-1 bg-[#D10024] transition-all top-5 duration-300 group-hover:w-full"></span></Link>
    </div>
  
    
    </div>
          </div>
          
        </div>
    </footer>
    <div className="bottom bg-black text-center py-4">
<p className='text-white'>Copyright ©2024 All rights reserved | This Website is made with  by Shakeel Ahmed</p>
    </div>
    </>
  )
}

export default Footer