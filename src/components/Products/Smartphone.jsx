import React from 'react'
import phon1 from "../../assets/products/ph-1.png"
import phon2 from "../../assets/products/ph-2.png"
import phon3 from "../../assets/products/ph-3.png"
import phon4 from "../../assets/products/ph-4.png"
import { FaCartShopping } from 'react-icons/fa6'
const smartphones = [
    { img: phon1, category: "Smartphone", title: "Affordable Smartphone with High-Quality Display", price: "700" },
    { img: phon2, category: "Smartphone", title: "Perfect Smartphone for Photography Enthusiasts", price: "800" },
    { img: phon3, category: "Smartphone", title: "Smartphone with Amazing Camera and Battery", price: "900" },
    { img: phon4, category: "Smartphone", title: "Flagship Smartphone with Best Performance", price: "1500" }
];
export const Smartphone = () => {
    return (
        <div className="product grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 my-10 gap-5 px-4 md:px-24">
            {smartphones.map((phone, indext)=>(
            <div key={indext} className="product border  px-4 py-4">
                <div className="flex flex-col items-center justify-center">
                <img className='h-40 w-40 object-contain' src={phone.img} alt="" />
                <p>{phone.category}</p>
                <p className='text-xl font-semibold text-center'>{phone.title.substring(0,20)}</p>
                <p className='text-[#D10024] font-bold '>${phone.price}</p>
                <button className='transform my-4 transition-all duration-300 hover:scale-105 flex items-center gap-4 bg-[#D10024] text-white rounded-full py-2 px-4'>Add to Cart <span className='text-xl '><FaCartShopping/></span></button>
                </div>
            </div>
        ))}
        </div>
      )
}
