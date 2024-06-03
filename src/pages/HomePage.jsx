import React from 'react'
import Navbar from '../components/Navbar'
import Product from '../components/Product'
import Home from '../components/Home'
import Order from '../components/Order'
import News from '../components/News'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ProductPage from '../components/ProductPage'
import Title from '../components/Title'


const HomePage = () => {
  return (
    <>
      <Navbar/>
    <Home/>
    <div>
    <Title subTitle='Product ' title='TechWave XR'/>
   
    <Product/>
    <ProductPage/>
    <Title subTitle='Pre-Order ' title='TechWave XR'/>
    <Order/>
    <Title subTitle='News ' title='TechWave XR'/>
    <News/>
    <Title subTitle='Get in Touch ' title='TechWave XR'/>
    <Contact/>
      </div>
    <Footer/>
    </>

  )
}

export default HomePage