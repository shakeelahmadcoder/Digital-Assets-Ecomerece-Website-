import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
// import Categories from './components/categories'
import { Laptop } from './components/Products/Laptop'
import { Smartphone } from './components/Products/Smartphone'
import { Camera } from './components/Products/Camera'
import Headphone from './components/Products/Headphone'
import HotSelling from './components/HotSelling'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/categories' element={<Categories/>}></Route>
      <Route path='/laptops' element={<Laptop/>}></Route>
      <Route path='/smartphones' element={<Smartphone/>}></Route>
      <Route path='/cameras' element={<Camera/>}></Route>
      <Route path='/headphones' element={<Headphone/>}></Route>
      <Route path='/hotdeals' element={<HotSelling/>}></Route>
      </Routes> 
      <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App