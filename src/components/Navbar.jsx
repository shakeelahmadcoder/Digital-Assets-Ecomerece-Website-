import React, { useState } from 'react'
import { MdLocalPhone } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";



const Navbar = () => {
const [showNav, setShowNav] = useState(false)
const NavShow = () => {
    setShowNav(!showNav);
};

  return (
    <nav className='relative '>
        {/* top nav email and contact */}
        <div className="top-bar bg-[#1E1F29] md:flex   justify-between py-3 px-4 md:px-24 ">
                {/* left for contact   */}
                <div className="left md:flex my-3 md:my-0 gap-4">
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
                {/* right for signup etc  */}
                <div className="right flex gap-4">
                     {/* usd */}
                     <div className="flex items-center gap-2">
                <FaDollarSign className='text-[#D10024] font-bold text-sm'/>
                <p className='hover:text-red-700  text-white  cursor-pointer text-sm'> USD</p>
                    </div>
                    {/* user account */}
                    <div className="flex items-center gap-2">
                <FaRegUser className='text-[#D10024] font-bold text-sm'/>
                <p className='hover:text-red-700  text-white  cursor-pointer text-sm'> My Account </p>
                    </div>
                </div>
        </div>
        {/* medium nav for logo, searchbar, and other icons like add to cart etc  */}
        <div className='bottom-bar py-10  bg-[#15161d] text-white flex-col sm:flex-col sm:py-10 md:py-10 md:flex-col items-center justify-center  lg:flex-row text-center gap-4  md:flex md:justify-between    md:px-24'>
            {/*left for logo  */}
            <div className="logo">
                <h1 className='text-4xl font-bold'>ELECTRO<span className='text-[#D10024]'>.</span></h1>
            </div>
            {/* medium for search bar  */}
            <div className="search-bar flex text-sm  justify-center items-center my-5 md:my-0 ">
                        {/* right for categories  */}
                        <span className=' bg-white text-black rounded-l-full py-2  hidden sm:block sm:px-4 '>All Categories |</span>
                        {/* medium for search bar input  */}
                        <form ><input className='py-2 sm:px-9 px-2  rounded-l-full sm:rounded-none text-black ' type="text" placeholder='Search here'/></form>
                        {/* left for button  */}
                        <button className='bg-[#D10024] text-white rounded-r-full py-2 px-4'>Search</button>
            </div>

            {/* right for addToCart and WishList  */}
            <div className="icons flex gap-4 justify-center items-center mt-10 lg:my-0 ">
                        {/* wishlist icon  */}
                    <div className='flex gap-4 flex-col items-center justify-center text-center'>
                        <div className="icon relative text-center">
                        <FaRegHeart />
                        <div className="h-2 w-2 rounded-full p-3 font-bold bg-[#D10024] text-white flex items-center justify-center text-sm absolute top-[-19px] right-[-24px]">1</div>
                        </div>
                        <p className='text-sm'>Your Wishlist</p>
                    </div>
                        {/* addToCartIcon */}
                    <div className='flex gap-4 flex-col items-center justify-center text-center'>
                        <div className="icon relative text-center">
                        <FaCartShopping />
                        <div className="h-2 w-2 rounded-full p-3 font-bold bg-[#D10024] text-white flex items-center justify-center text-sm absolute top-[-19px] right-[-24px]">2</div>
                        </div>
                        <p className='text-sm'>Your Cart</p>
                    </div>
                    {/* hamburger  */}
                    <div className=' lg:hidden flex gap-4 flex-col items-center justify-center text-center '>
                        <div className="icon  text-center">
                        {/* <GiHamburgerMenu onClick={NavShow} className='text-xl cursor-pointer' /> */}
                        {showNav ? <ImCross onClick={NavShow} className='text-xl cursor-pointer' />: <GiHamburgerMenu onClick={NavShow} className='text-xl cursor-pointer' />}
                        {/* <div className="h-2 w-2 rounded-full p-3 font-bold bg-[#D10024] text-white flex items-center justify-center text-sm absolute top-[-19px] right-[-24px]">2</div> */}
                        </div>
                        <p className='text-sm'>Menue</p>
                    </div>
                    

            </div>
        </div>
        <hr className='border border-[#D10024]'/>
        <hr className='border border-[#D10024]'/>
        
{/* navigation menue  */}
        <div className=" hidden md:flex gap-8 px-4 md:px-24 py-4 bg-white shadow-md ">
    <div className="group">
    <Link to="/" className=" relative hover:text-[#D10024]"> Home<span className="absolute left-0 bottom-0 w-0 h-1 bg-[#D10024] transition-all top-5 duration-300 group-hover:w-full"></span></Link>
    </div>
    <div className="group">
    <Link to="/hotdeals" className=" relative hover:text-[#D10024]"> Hot Deals<span className="absolute left-0 bottom-0 w-0 h-1 bg-[#D10024] transition-all top-5 duration-300 group-hover:w-full"></span></Link>
    </div>
    <div className="group">
    <Link to="/categories" className=" relative hover:text-[#D10024]"> Categories<span className="absolute left-0 bottom-0 w-0 h-1 bg-[#D10024] transition-all top-5 duration-300 group-hover:w-full"></span></Link>
    </div>
    <div className="group">
    <Link to="/laptops" className=" relative hover:text-[#D10024]"> Laptops<span className="absolute left-0 bottom-0 w-0 h-1 bg-[#D10024] transition-all top-5 duration-300 group-hover:w-full"></span></Link>
    </div>
    <div className="group">
    <Link to="/smartphones" className=" relative hover:text-[#D10024]"> Smpartphones<span className="absolute left-0 bottom-0 w-0 h-1 bg-[#D10024] transition-all top-5 duration-300 group-hover:w-full"></span></Link>
    </div>
    <div className="group">
    <Link to="/cameras" className=" relative hover:text-[#D10024]"> Cameras<span className="absolute left-0 bottom-0 w-0 h-1 bg-[#D10024] transition-all top-5 duration-300 group-hover:w-full"></span></Link>
    </div>
    
    
    </div>
    {/* on mobile  */}
    {showNav && 
        <div className="lg:hidden flex flex-col gap-8 px-4 md:px-24 py-4 bg-black text-white shadow-md absolute top-0 h-full">
    <div className="group">
    <Link to="/" className=" relative hover:text-[#D10024]"> Home<span className="absolute left-0 bottom-0 w-0 h-1 bg-[#D10024] transition-all top-5 duration-300 group-hover:w-full"></span></Link>
    </div>
    <div className="group">
    <Link to="/hotdeals" className=" relative hover:text-[#D10024]"> Hot Deals<span className="absolute left-0 bottom-0 w-0 h-1 bg-[#D10024] transition-all top-5 duration-300 group-hover:w-full"></span></Link>
    </div>
    <div className="group">
    <Link to="/categories" className=" relative hover:text-[#D10024]"> Categories<span className="absolute left-0 bottom-0 w-0 h-1 bg-[#D10024] transition-all top-5 duration-300 group-hover:w-full"></span></Link>
    </div>
    <div className="group">
    <Link to="/laptops" className=" relative hover:text-[#D10024]"> Laptops<span className="absolute left-0 bottom-0 w-0 h-1 bg-[#D10024] transition-all top-5 duration-300 group-hover:w-full"></span></Link>
    </div>
    <div className="group">
    <Link to="/smartphones" className=" relative hover:text-[#D10024]"> Smpartphones<span className="absolute left-0 bottom-0 w-0 h-1 bg-[#D10024] transition-all top-5 duration-300 group-hover:w-full"></span></Link>
    </div>
    <div className="group">
    <Link to="/cameras" className=" relative hover:text-[#D10024]"> Cameras<span className="absolute left-0 bottom-0 w-0 h-1 bg-[#D10024] transition-all top-5 duration-300 group-hover:w-full"></span></Link>
    </div>
  
    
    </div>
    }
    </nav>
  )
}

export default Navbar