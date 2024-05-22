import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()
  return (
    <>
      <div className='w-full  flex justify-between items-center font-semibold'>
        <div className='flex item-center gap-2'>
          <img onClick={()=> navigate(-1)} className='w-8 bg-black rounded-2x1 cursor-pointer' src={assets.arrow_left} alt=''></img>
          <img onClick={()=> navigate(1)} className='w-8 bg-black rounded-2x1 cursor-pointer' src={assets.arrow_right} alt=''></img>

        </div>
        <div className='flex items-center gap-4'>
          <p className='bg-white text-black text-[15px] py-1 rounded  hidden md:block '>Explore Premium</p>
          <p className='bg-black py-1 px-3 rounded 2xl text-[15px] '>Install App</p>
          <p className=' bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center'>S</p>
        </div>
      </div>
    <div className='flex items-center gap-2 mt-4 '>
      <p className='bg-white text-black px-4 py-1  rounded-2xl cursor-pointer'>All</p>
      <p className='bg-black text-white px-4 py-1  rounded-2xl cursor-pointer' >Music</p>
      <p className='bg-black text-white px-4 py-1   rounded-2xl'>Postcats</p>
    </div>
    </>
  )
}

export default Navbar
