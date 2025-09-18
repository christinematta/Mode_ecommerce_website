import React from 'react'
import Hero from '../Components/Hero/Hero'
import PopularList from '../Components/PopularList/PopularList'
import Offers from '../Components/Offers/Offers'
import NewCollection from '../Components/NewCollection/NewCollection'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import Footer from '../Components/Footer/Footer'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Offers/>
      <PopularList/>
      <NewCollection/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default Shop
