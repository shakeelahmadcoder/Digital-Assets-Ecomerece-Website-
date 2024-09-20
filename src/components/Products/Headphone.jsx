import React from 'react'
import head1 from "../../assets/products/hp-1.png"
import head2 from "../../assets/products/hp-2.png"
import head3 from "../../assets/products/hp-3.png"
import head4 from "../../assets/products/hp-4.png"
import { FaCartShopping } from 'react-icons/fa6'


const headphones = [
    { img: head1, category: "Headphone", title: "Noise-Cancelling Headphones for Music Lovers", price: "150" },
    { img: head2, category: "Headphone", title: "Comfortable Headphones for Long Listening", price: "200" },
    { img: head3, category: "Headphone", title: "Wireless Headphones with Deep Bass", price: "180" },
    { img: head4, category: "Headphone", title: "Bluetooth Headphones with Long Battery Life", price: "170" }
];
const Headphone = () => {
    return (
        <div className="product grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 my-10 gap-5 px-4 md:px-24">
            {headphones.map((phone, indext)=>(
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

export default Headphone