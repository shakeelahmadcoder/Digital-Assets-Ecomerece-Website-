import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);

  return (
    <div className='cart px-4 md:px-24 my-16'>
      <h1 className='text-xl text-center font-bold'>Your Cart</h1>

      {cartItems.length > 0 ? (
        <div className='cart-items mt-8 flex flex-col gap-5'>
          {cartItems.map((item, index) => (
            <div key={index} className='itme-cart border justify-center text-center items-center sm:flex-row px-4 py-4 sm:py-2 gap-8 flex flex-col'>
              {/* Ensure the correct path to img, like item.img or item.product.img */}
              <img src={item.product.img} alt='product image' className='h-32 w-32 object-contain' />
              <p>{item.product.category}</p>
                <p className='text-xl font-semibold '>{item.product.title.substring(0, 20)}</p>
                <p className='text-[#D10024] font-bold'>${item.product.price}</p>
            <div className='button flex'>
                <button className='border px-8 text-4xl py-1'>+</button>
                <div className='px-8 text-4xl py-1'>1</div>
                <button className='border px-8 text-4xl py-1'>-</button>
            </div>
            <button className='bg-[#D10024] text-white rounded-full py-2 px-4'>Remove</button>
            </div>
          ))}
        </div>
      ) : (
        <p className='mt-8'>Your Cart is Empty</p>
      )}
    </div>
  );
};

export default Cart;
