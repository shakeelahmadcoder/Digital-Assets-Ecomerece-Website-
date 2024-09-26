import React from 'react'

import cam1 from "../../assets/products/cam1.png";
import cam2 from "../../assets/products/cam2.png";
import cam3 from "../../assets/products/cam3.png";
import cam4 from "../../assets/products/cam4.png";
import { FaCartShopping } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
const cameras = [
    { id: 11, img: cam1, category: "Camera", title: "High-Resolution Camera for Professional Photography", price: "2500" },
    { id: 12, img: cam2, category: "Camera", title: "Compact Camera with Advanced Features", price: "1500" },
    { id: 13, img: cam3, category: "Camera", title: "Affordable Camera for Hobbyists", price: "800" },
    { id: 14, img: cam4, category: "Camera", title: "Ultra-Zoom Camera for Versatile Shooting", price: "2000" }
  ];
export const Camera = () => {
    const dispatch = useDispatch()
    const product = useSelector(state=> state.cart.cart)
    return (
        <div className="product grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 my-10 gap-5 px-4 md:px-24">
            {cameras.map((product, indext)=>(
            <div key={indext} className="product border  px-4 py-4">
                <div className="flex flex-col items-center justify-center">
                <img className='h-40 w-40 object-contain' src={product.img} alt="" />
                <p>{product.category}</p>
                <p className='text-xl font-semibold text-center'>{product.title.toString(0,20)}</p>
                <p className='text-[#D10024] font-bold '>${product.price}</p>
                {/* <button className='transform my-4 transition-all duration-300 hover:scale-105 flex items-center gap-4 bg-[#D10024] text-white rounded-full py-2 px-4'>Add to Cart <span className='text-xl '><FaCartShopping/></span></button> */}
                <button onClick={()=> dispatch(addToCart({product}))} className='transform my-4 transition-all duration-300 hover:scale-105 flex items-center gap-4 bg-[#D10024] text-white rounded-full py-2 px-4'>
                  Add to Cart <span className='text-xl'><FaCartShopping /></span>
                </button>
                </div>
            </div>
        ))}
        </div>
      )
}
