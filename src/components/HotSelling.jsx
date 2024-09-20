import React from 'react'
import laptop from "../assets/laptop.png"
import camera from "../assets/camera.png"
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const HotSelling = () => {
  return (
    <div className='bg-[#E4E7ED] w-full my-8 flex items-center justify-between text-center py-8'>
        {/* left for laptop image  */}
        <div className="left hidden sm:block"><img src={laptop} alt="" /></div>
        {/* mid for content  */}
        <div className="mid flex flex-col justify-center items-center m-auto">
            {/* for time boxes  */}
                <div className="boxes grid grid-cols-2 md:grid-cols-4  gap-4">
                        {/* box  */}
                        <div className="box flex flex-col justify-center items-center text-center h-24 w-24 rounded-full p-4 bg-[#D10024] text-white">
                            <p className='text-4xl font-bold'>02</p>
                            <p className='text-[10px]'>Days</p>
                        </div>
                        {/* box  */}
                        <div className="box flex flex-col justify-center items-center text-center h-24 w-24 rounded-full p-4 bg-[#D10024] text-white">
                            <p className='text-4xl font-bold'>10</p>
                            <p className='text-[10px]'>Hours</p>
                        </div>
                        {/* box  */}
                        <div className="box flex flex-col justify-center items-center text-center h-24 w-24 rounded-full p-4 bg-[#D10024] text-white">
                            <p className='text-4xl font-bold'>34</p>
                            <p className='text-[10px]'>Minutes</p>
                        </div>
                        {/* box  */}
                        <div className="box flex flex-col justify-center items-center text-center h-24 w-24 rounded-full p-4 bg-[#D10024] text-white">
                            <p className='text-4xl font-bold'>60</p>
                            <p className='text-[10px]'>Seconds</p>
                        </div>
                </div>
                {/* for text  */}
                <div className="text flex flex-col justify-center items-center py-4">
                    <p className='text-xl font-bold'>HOT DEAL THIS WEEK</p>
                    <p>NEW COLLECTION UP TO 50% OFF</p>
                    <Link to="/categories"><button className=' transform transition-all duration-300 hover:scale-125 flex items-center gap-4 bg-[#D10024] text-white rounded-full py-2 my-4 px-4 font-bold'>Shop Now <span><FaLongArrowAltRight className='text-xl cursor-pointer'/></span></button></Link>
                </div>
        </div>
        {/* right for head phone image  */}
        <div className="right hidden sm:block"><img src={camera} alt="" /></div>
    </div>
  )
}

export default HotSelling