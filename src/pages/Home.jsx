import React from 'react'
import Product from '../components/Product'
import HotSelling from '../components/HotSelling'
import TopSelling from "../components/TopSelling"
import Signup from '../components/Signup'
import Categories from '../components/Categories'
const Home = () => {
  return (
    <>
    <Categories/>
    <Product/>
    <HotSelling/>
    <TopSelling/>
    <Signup/>
    </>
  )
}

export default Home