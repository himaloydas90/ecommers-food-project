import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { Link } from 'react-router'

const BestDels = () => {
  return (
<div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-9 pb-28">
  
  {/* Card 1 */}
  <div className="relative bg-[url('/bestdil.png')] bg-cover bg-center w-full max-w-[424px] h-[536px] mx-auto rounded-lg">
    <p className='text-white text-center font-medium text-base uppercase pt-9 pb-5 '>best deals</p>
    <h3 className='font-semibold text-center capitalize text-white text-4xl'>Sale of the Month</h3>
    <div className="flex justify-center gap-4 pt-5 mb-5 text-white">
      <div><span className="text-xl block">00</span><span className="text-base opacity-70 uppercase">Days</span></div>
      <span className="opacity-50">:</span>
      <div><span className="text-xl block">02</span><span className="text-base opacity-70 uppercase">Hours</span></div>
      <span className="opacity-50">:</span>
      <div><span className="text-xl block">18</span><span className="text-base opacity-70 uppercase">Mins</span></div>
      <span className="opacity-50">:</span>
      <div><span className="text-xl block">46</span><span className="text-base opacity-70 uppercase">Secs</span></div>
    </div>
    <Link to="/" className='flex justify-center'>
       <button className=" cursor-pointer py-3.5 px-8 rounded-[43px] bg-white items-center text-base flex gap-3 text-brand font-semibold">Shop Now <FaArrowRight /></button>
    </Link>
  </div>

  {/* Card 2 */}
  <div className="relative bg-[url('/bestdil1.png')] bg-cover bg-center w-full max-w-[424px] h-[536px] mx-auto rounded-lg">
    <p className='text-white text-center font-medium text-base uppercase pt-9 pb-5 '>85% Fat Free</p>
    <h3 className='font-semibold text-center capitalize text-white text-4xl'>Low-Fat Meat</h3>
    <p className='pt-3.5 pb-7 text-center text-white text-lg '>Started at <span className='text-brand font-semibold text-2xl'>$79.99</span></p>
    <Link to="/" className='flex justify-center'>
       <button className="cursor-pointer py-3.5 px-8 rounded-[43px] bg-white items-center text-base flex gap-3 text-brand font-semibold" >Shop Now<FaArrowRight /></button>
    </Link>
  </div>

  {/* Card 3 */}
  <div className="relative bg-[url('/bestdil2.png')] bg-cover bg-center w-full max-w-[424px] h-[536px] mx-auto rounded-lg">
    <p className='text-white text-center font-medium text-base uppercase pt-9 pb-5 '>Summer Sale</p>
    <h3 className='font-semibold text-center capitalize text-white text-4xl'>100% Fresh Fruit</h3>
    <p className='text-center mt-3.5 mb-7 text-lg text-secondary'>Up to <span className='bg-secondary px-3 py-1.5 ml-3 text-brand font-semibold rounded-md'>64% OFF</span> </p>
    <Link to="/" className='flex justify-center '>
      <button className="cursor-pointer py-3.5 px-8 rounded-[43px] bg-white items-center text-base flex gap-3 text-brand font-semibold" >Shop Now<FaArrowRight /></button>
    </Link>
  </div>

</div>
  )
}

export default BestDels
