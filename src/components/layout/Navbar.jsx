import React, { useState } from 'react'
import { Link } from 'react-router'
import Input from '../Ui/Input'
import { FaPhoneVolume, FaRegHeart, FaRegUser, FaSearch } from 'react-icons/fa'
import Button from '../Ui/Button'
import { BsCartDash } from 'react-icons/bs'
import { SlArrowDown } from 'react-icons/sl'
import { IoMenuSharp } from 'react-icons/io5'

const Navbar = () => {

const catagories =["Home","Shop","Pages","Blog","About Us","Contact Us"]
const [Menu, setMenu] = useState(false)


  return (   
    <header className=' relative'>
      <nav className='py-8'>
          <div className="container mx-auto flex justify-between items-center flex-wrap md:flex-nowrap gap-5">
            <Link to="/" className='mx-auto md:mx-0 '>
            <img src="/Logo.png" alt="logo" className='w-full'/>
            </Link>
            <div className='flex bg-[#F1F1F1] items-center h-fit rounded-md w-full mx-w-xs md:max-w-lg xl:max-w-3xl'>
                <Input placeholder=" I'am loking for...." className='border-none'/> 
                <Button className="rounded-l-none px-5">
                  <FaSearch className='text-xl' />
                </Button>
            </div>
            <div >
              <IoMenuSharp className='text-2xl md:hidden text-primary' 
              onClick={() => setMenu(!Menu)}/>
            </div>
            <div className='flex gap-5 md:gap-10 '>
              <Link to="/login" className='flex items-center gap-1.5 text-base font-normal text-primary'>
              <FaRegUser />
              <span className='hidden md:block'>login</span></Link>
              
              <div className='flex items-center gap-1.5'>
                <FaRegHeart />
                <span className='hidden md:block'>Wishlist</span>
              </div>
              <div>
              <Link to="/login" className='flex items-center gap-1.5 text-base text-nowrap font-normal text-primary'><BsCartDash /><span className='hidden md:block'>My cart</span> 
                <span className='w-5 h-5 rounded-full text-white text-center flex items-center justify-center bg-red-500'>0</span>
              </Link>
              </div>
            </div>
          </div>
        </nav>
        <div className='container  hidden md:block pb-2.5'>
          <ul className='flex justify-between gap-5 lg:gap-14 px-1.5 h-14 items-center bg-[#333333]'>
            {
              catagories.map((item)=>(
                <li key={item}>
                 <Link to="/" className='text-base font-medium  text-extra uppercase text-nowrap flex items-center gap-1 hover:text-[#FFFFFF]'>{item}<SlArrowDown className='text-xs '/></Link>
                </li>
              ))
            }
            <li className='ml-auto flex justify-center gap-1.5 overflow-x-hidden text-extra hover:text-[#FFFFFF]'><span className='text-xl'><FaPhoneVolume /></span>01719227366</li>
          </ul>
        </div>
        {
          Menu && (
            <div className='md:hidden text-white bg-brand  px-4 py-2 absolute top-[90%] left-0 right-0 z-50 rounded-md'>
              <ul className='flex flex-col gap-3'>
                {
                  catagories.map((item)=>(
                    <li key={item}>
                      <Link 
                        to="/" 
                        className=' text-base uppercase'
                        onClick={() => setMenu(false)}
                      >
                        {item}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          )
        }
    </header>
  )
}

export default Navbar
  