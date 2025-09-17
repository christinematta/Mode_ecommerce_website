import React from 'react'
import Hero from '../Components/Hero/Hero'
import PopularList from '../Components/PopularList/PopularList'
import Offers from '../Components/Offers/Offers'
import NewCollection from '../Components/NewCollection/NewCollection'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Offers/>
      <PopularList/>
      <NewCollection/>
    </div>
  )
}

export default Shop
