import React from 'react'
import laptop1 from "../../assets/products/lap-1.png"
import laptop2 from "../../assets/products/lap-2.png"
import laptop3 from "../../assets/products/lap-3.png"
import laptop4 from "../../assets/products/lap-4.png"
import { FaCartShopping } from 'react-icons/fa6'

const laptops = [
    { img: laptop1, category: "Laptop", title: "Powerful Laptop for Coding and Gaming", price: "1200" },
    { img: laptop2, category: "Laptop", title: "High-Performance Laptop for Developers", price: "1100" },
    { img: laptop3, category: "Laptop", title: "Ultra-light Laptop for Travel and Work", price: "1300" },
    { img: laptop4, category: "Laptop", title: "Gaming Laptop with RGB Keyboard and Graphics", price: "1400" }
];
export const Laptop = () => {
  return (
    <div className="product grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 my-10 gap-5 px-4 md:px-24">
        {laptops.map((laptop, indext)=>(
        <div key={indext} className="product border  px-4 py-4">
            <div className="flex flex-col items-center justify-center">
            <img className='h-40 w-40 object-contain' src={laptop.img} alt="" />
            <p>{laptop.category}</p>
            <p className='text-xl font-semibold text-center'>{laptop.title.substring(0,20)}</p>
            <p className='text-[#D10024] font-bold '>${laptop.price}</p>
            <button className='transform my-4 transition-all duration-300 hover:scale-105 flex items-center gap-4 bg-[#D10024] text-white rounded-full py-2 px-4'>Add to Cart <span className='text-xl '><FaCartShopping/></span></button>
            </div>
        </div>
    ))}
    </div>
  )
}
