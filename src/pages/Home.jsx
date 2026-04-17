import React from 'react'
import Bannar from '../components/Home/Bannar'
import FeatureBar from '../components/Home/FeatureBar'
import PopularCategories from '../components/Home/PopularCategories'
import PopularProducts from '../components/Home/PopularProducts'
import LowFat from '../components/Home/LowFat'


const Home = () => {
  return (
    <>
    
       <div>
         <Bannar/>
         <FeatureBar/>
         <PopularCategories/>
         <PopularProducts/>
         <LowFat/>
       </div>
    </>
  )
}

export default Home
