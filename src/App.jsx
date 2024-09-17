import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Categories from './components/categories'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/categories' element={<Categories/>}></Route>
      </Routes> 
     </BrowserRouter>
    </>
  )
}

export default App