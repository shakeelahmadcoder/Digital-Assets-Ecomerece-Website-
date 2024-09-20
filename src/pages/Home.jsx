import React from 'react'
import Categories from '../components/categories'
import Product from '../components/Product'
import HotSelling from '../components/HotSelling'
import TopSelling from "../components/TopSelling"
import Signup from '../components/Signup'
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