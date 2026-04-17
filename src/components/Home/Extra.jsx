// import React, { useEffect, useRef, useState } from 'react'
// import { Link } from 'react-router'
// import Input from '../Ui/Input'
// import { FaPhoneVolume, FaPlus, FaRegHeart, FaRegUser, FaSearch } from 'react-icons/fa'
// import Button from '../Ui/Button'
// import { BsCartDash } from 'react-icons/bs'
// import { SlArrowDown } from 'react-icons/sl'
// import { IoMenuSharp } from 'react-icons/io5'

// const Navbar = () => {
//  // ✅ dropdown state
//   const [openCat, setOpenCat] = useState(false)
//   const catRef = useRef()

//   // ✅ outside click close
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (!catRef.current?.contains(e.target)) {
//         setOpenCat(false)
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside)
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside)
//     }
//   }, [])


//   return (   
//     <header>
//       <nav className='py-8'>
//           <div className="container flex justify-between items-center flex-wrap md:flex-nowrap gap-5">
//             <Link to="/" className='order-1'>
//             <img src="/Logo.png" alt="logo" className='w-full'/>
//             </Link>
//             <div className='flex bg-[#F1F1F1] items-center h-fit rounded-md w-full mx-w-20 md:max-w-lg xl:max-w-3xl order-3 md:order-2'>
//                 <Input placeholder=" I'am loking for...." className='border-none'/> 
//                 <Button className="rounded-l-none px-5">
//                   <FaSearch className='text-xl' />
//                 </Button>
//             </div>
//             <div className='flex gap-5 md:gap-10 order-2 md:order-3'>
//               <Link to="/login" className='flex items-center gap-1.5 text-base font-normal text-primary'>
//               <FaRegUser />
//               <span className='hidden md:block'>login</span></Link>
              
//                <div className='flex items-center gap-1.5'>
//               <FaRegHeart />
//               <span className='hidden md:block'>Wishlist</span>
//             </div>
//               <Link to="/login" className='flex items-center gap-1.5 text-base font-normal text-primary'><BsCartDash /><span className='hidden md:block'>My cart</span> 
//                 <span className='w-5 h-5 rounded-full text-white text-center flex items-center justify-center bg-red-500'>0</span>
//               </Link>
//             </div>
           
//           </div>
//         </nav>
//         <div className='container pb-2.5'>
//           <ul className='flex gap-14 px-1.5 h-14 items-center  bg-[#333333] overflow-visible relative'>
//             <li className="relative text-base font-medium z-50  text-extra uppercase text-nowrap flex items-center gap-1 hover:text-[#FFFFFF]" ref={catRef}>
//             <button
//               onClick={() => setOpenCat(!openCat)}
//               className='text-base font-medium text-extra uppercase flex cursor-pointer items-center gap-1 hover:text-white'
//             >
//               <IoMenuSharp className='text-2xl cursor-pointer' />
//               Categories
//               <SlArrowDown className='text-2xl cursor-pointer pl-3' />
//             </button>

//             {openCat && (
//               <div className="absolute  left-0 top-full mt-2 w-64 bg-white text-black rounded-lg shadow-lg z-50 ">
//                 <ul className="py-2">
//                   <li className="px-4 py-2 hover:bg-brand cursor-pointer">
//                     <Link to="/">Fresh Fruit</Link>
//                   </li>
//                   <li className="px-4 py-2 hover:bg-brand cursor-pointer">
//                     <Link to="/">Vegetables</Link>
//                   </li>
//                   <li className="px-4 py-2 hover:bg-brand cursor-pointer">
//                     <Link to="/">River Fish</Link>
//                   </li>
//                   <li className="px-4 py-2 hover:bg-brand cursor-pointer">
//                     <Link to="/">Chicken & Meat</Link>
//                   </li>
//                   <li className="px-4 py-2 hover:bg-brand cursor-pointer">
//                     <Link to="/">Drink & Water</Link>
//                   </li>
//                   <li className="px-4 py-2 hover:bg-brand cursor-pointer">
//                     <Link to="/">Cake & Bread</Link>
//                   </li>
//                   <li className="px-4 py-2 hover:bg-brand cursor-pointer">
//                     <Link to="/">Butter & Cream</Link>
//                   </li>
//                   <li className="px-4 py-2 hover:bg-brand cursor-pointer">
//                     <Link to="/">Cooking</Link>
//                   </li>
//                   <li className="px-4 py-2 border-t border-extra/50  hover:bg-brand cursor-pointer ">
//                     <Link to="/" className='flex items-center gap-1'> 
//                     <FaPlus  /><span>View all Category</span> 
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </li>
//             <li>
//               <Link to="/" className='text-base font-medium  text-extra uppercase text-nowrap flex items-center gap-1 hover:text-[#FFFFFF]'>Home<SlArrowDown className='text-xs '/></Link>
//             </li>
//             <li>
//               <Link to="/" className='text-base font-medium  text-extra uppercase text-nowrap flex items-center gap-1 hover:text-[#FFFFFF]'>Shop<SlArrowDown className='text-xs '/></Link>
//             </li>
//             <li>
//               <Link to="/" className='text-base font-medium  text-extra uppercase text-nowrap flex items-center gap-1 hover:text-[#FFFFFF]'>Pages<SlArrowDown className='text-xs '/></Link>
//             </li>
//             <li>
//               <Link to="/" className='text-base font-medium  text-extra uppercase text-nowrap flex items-center gap-1 hover:text-[#FFFFFF]'>Blog<SlArrowDown className='text-xs '/></Link>
//             </li>
//             <li>
//               <Link to="/" className='text-base font-medium  text-extra uppercase text-nowrap flex items-center gap-1 hover:text-[#FFFFFF]'>About Us<SlArrowDown className='text-xs '/></Link>
//             </li>
//             <li>
//               <Link to="/" className='text-base font-medium  text-extra uppercase text-nowrap flex items-center gap-1 hover:text-[#FFFFFF]'>Contact Us<SlArrowDown className='text-xs '/></Link>
//             </li>
//             <li className='ml-auto flex justify-center gap-1.5 overflow-x-hidden text-extra hover:text-[#FFFFFF]'><span className='text-xl'><FaPhoneVolume /></span>01719227366</li>
//           </ul>
//         </div>
//     </header>
//   )
// }

// export default Navbar