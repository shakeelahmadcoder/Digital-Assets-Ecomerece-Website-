import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import laptop from "../assets/laptop.png"
import headphone from "../assets/headphone.png"
import camera from "../assets/camera.png"
import { Link } from 'react-router-dom';

const category = [
    {image: laptop, title: "Laptopes Collection", path: "/laptops"},
    {image: headphone, title: "Headphones Collection", path: "/headphones"},
    {image: camera, title: "Cameras Collection", path: "/cameras"},
]
const Categories = () => {
  return (
    <div className='categories px-4 md:px-24 grid grid-cols-1 sm:grid-cols-3 gap-4 my-8'>
        {category.map((category, index)=>(
            <div className="category border flex flex-col items-center justify-center py-5">
                <img className='h-60 w-60 object-contain' src={category.image} alt="" />
                <p className='text-xl font-bold py-2'>{category.title}</p>
                <Link to={category.path}><button className='flex items-center gap-4'>Shop Now <span><FaLongArrowAltRight className='text-xl cursor-pointer'/></span></button></Link>
            </div>
        ))}
    </div>
  )
}

export default Categories