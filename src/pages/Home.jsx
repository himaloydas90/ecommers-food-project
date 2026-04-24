import React from 'react'
import Bannar from '../components/Home/Bannar'
import FeatureBar from '../components/Home/FeatureBar'
import PopularCategories from '../components/Home/PopularCategories'
import PopularProducts from '../components/Home/PopularProducts'
import LowFat from '../components/Home/LowFat'
import BestDels from '../components/Ui/BestDels'
import HotDels from '../components/Home/HotDels'


const Home = () => {
  return (
    <>
    
       <div>
         <Bannar/>
         <FeatureBar/>
         <PopularCategories/>
         <PopularProducts/>
         <LowFat/>
         <BestDels/>
         <HotDels/>
       </div>
    </>
  )
}

export default Home
