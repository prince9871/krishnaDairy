import React from 'react'
import Carousel from '../components/Carousel'
import About from '../components/AboutUs'
import Feature from '../components/Feature'
import Banner from '../components/Banner'
import Testimonial from '../components/Testimonial'
import Services from '../components/Services'
import Product from '../components/Product'
import Team from '../components/Team'

const Home = () => {
  return (
    <div>
      <Carousel />
      <About />
      <Feature />
      <Banner />
      <Product />
      <Services />
      <Team />
      <Testimonial />
    </div>
  )
}

export default Home
