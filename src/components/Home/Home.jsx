import React from 'react'
import Navbar from '../header/Navbar/Navbar'
import SubNavbar from '../header/SubNav/SubNavbar'
import HomeCarousel from './Carousel/HomeCarousel'
import Products from './Products/Products'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <SubNavbar/>
        <HomeCarousel/>
        <Products/>
    </div>
  )
}

export default Home