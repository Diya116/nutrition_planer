import React from 'react'
import { Navbar } from './Component'
import Hero from './Component/Hero'
import Services from './Component/Services'
import About from './Component/About'
import Slidebar from './Component/Slidebar'
import Product from './Component/Product'
import Review from './Component/Review'
import Footer
  from './Footer'
function App() {
 
  return (
    <div >
      <Navbar/>
      <Hero/>
      <Services/>
      <About/>
      <Product/>
      <Review/>
      <Footer/>

    </div>
  )
}

export default App
