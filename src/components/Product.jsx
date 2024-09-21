import React, { useState } from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import laptop1 from "../assets/products/lap-1.png";
import laptop2 from "../assets/products/lap-2.png";
import laptop3 from "../assets/products/lap-3.png";
import laptop4 from "../assets/products/lap-4.png";
import phon1 from "../assets/products/ph-1.png";
import phon2 from "../assets/products/ph-2.png";
import phon3 from "../assets/products/ph-3.png";
import phon4 from "../assets/products/ph-4.png";
import head1 from "../assets/products/hp-1.png";
import head2 from "../assets/products/hp-2.png";
import head3 from "../assets/products/hp-3.png";
import head4 from "../assets/products/hp-4.png";
import cam1 from "../assets/products/cam1.png";
import cam2 from "../assets/products/cam2.png";
import cam3 from "../assets/products/cam3.png";
import cam4 from "../assets/products/cam4.png";

// All products
const allProducts = [
  { img: laptop1, category: "Laptop", title: "Powerful Laptop for Coding and Gaming", price: "1200" },
  { img: phon2, category: "Smartphone", title: "Perfect Smartphone for Photography Enthusiasts", price: "800" },
  { img: head1, category: "Headphone", title: "Noise-Cancelling Headphones for Music Lovers", price: "150" },
  { img: cam4, category: "Camera", title: "Ultra-Zoom Camera for Versatile Shooting", price: "2000" },
  { img: laptop2, category: "Laptop", title: "High-Performance Laptop for Developers", price: "1100" },
  { img: phon3, category: "Smartphone", title: "Smartphone with Amazing Camera and Battery", price: "900" },
  { img: head2, category: "Headphone", title: "Comfortable Headphones for Long Listening", price: "200" },
  { img: laptop3, category: "Laptop", title: "Ultra-light Laptop for Travel and Work", price: "1300" },
  { img: phon1, category: "Smartphone", title: "Affordable Smartphone with High-Quality Display", price: "700" },
  { img: cam3, category: "Camera", title: "Affordable Camera for Hobbyists", price: "800" },
  { img: phon4, category: "Smartphone", title: "Flagship Smartphone with Best Performance", price: "1500" },
  { img: head3, category: "Headphone", title: "Wireless Headphones with Deep Bass", price: "180" },
  { img: cam2, category: "Camera", title: "Compact Camera with Advanced Features", price: "1500" },
  { img: laptop4, category: "Laptop", title: "Gaming Laptop with RGB Keyboard and Graphics", price: "1400" },
  { img: head4, category: "Headphone", title: "Bluetooth Headphones with Long Battery Life", price: "170" },
  { img: cam1, category: "Camera", title: "High-Resolution Camera for Professional Photography", price: "2500" },
];

const Product = () => {
  // State to track selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter products based on selected category
  const filteredProducts = selectedCategory === "All"
    ? allProducts
    : allProducts.filter(product => product.category === selectedCategory);

  // Slider settings
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000, 
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
        }
      }
    ]
  };

  return (
    <div className='products px-4 md:px-24 my-16'>
      {/* navigation bar */}
      <nav className='md:flex md:justify-between gap-4 md:gap-0 justify-center items-center'>
        <div className="left ">
          <h1 className='text-2xl font-bold'>NEW PRODUCTS</h1>
        </div>
        <div className="right">
          <ul className='sm:flex gap-5'>
            <div className="group">
              <div className="relative font-bold text-gray-600 hover:text-[#D10024] cursor-pointer"
                onClick={() => setSelectedCategory("Laptop")}> Laptops
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-[#D10024] transition-all top-5 duration-300 group-hover:w-full"></span>
              </div>
            </div>
            <div className="group">
              <div className="relative font-bold text-gray-600 hover:text-[#D10024] cursor-pointer"
                onClick={() => setSelectedCategory("Smartphone")}> Smartphones
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-[#D10024] transition-all top-5 duration-300 group-hover:w-full"></span>
              </div>
            </div>
            <div className="group">
              <div className="relative font-bold text-gray-600 hover:text-[#D10024] cursor-pointer"
                onClick={() => setSelectedCategory("Headphone")}> Headphones
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-[#D10024] transition-all top-5 duration-300 group-hover:w-full"></span>
              </div>
            </div>
            <div className="group">
              <div className="relative font-bold text-gray-600 hover:text-[#D10024] cursor-pointer"
                onClick={() => setSelectedCategory("Camera")}> Cameras
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-[#D10024] transition-all top-5 duration-300 group-hover:w-full"></span>
              </div>
            </div>
          </ul>
        </div>
      </nav>

      {/* products */}
      <div className="products my-10">
        <Slider {...settings}>
          {filteredProducts.map((product, index) => (
            <div key={index} className="product border px-4 py-4">
              <div className="flex flex-col items-center justify-center">
                <img className='h-40 w-40 object-contain' src={product.img} alt={product.title} />
                <p>{product.category}</p>
                <p className='text-xl font-semibold text-center'>{product.title.substring(0, 20)}</p>
                <p className='text-[#D10024] font-bold'>${product.price}</p>
                <button className='transform my-4 transition-all duration-300 hover:scale-105 flex items-center gap-4 bg-[#D10024] text-white rounded-full py-2 px-4'>
                  Add to Cart <span className='text-xl'><FaCartShopping /></span>
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Product;
