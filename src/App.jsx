import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './components/Navbar'
import ErrorPage from './Pages/NotFound'
import Footer from './components/Footer'
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'
import Service from './Pages/ServicePage'
import ServicePage from './Pages/ServicePage'
import ProductPage from './Pages/ProductPage'
import FeaturePage from './Pages/FeaturePage'
import TeamPage from './Pages/TeamPage'
import TestimonialPage from './Pages/TestimonialPage'

function App () {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/services' element={<ServicePage />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/features' element={<FeaturePage />} />
        <Route path='/team' element={<TeamPage />} />
        <Route path='/testimonial' element={<TestimonialPage />} />

        {/* <Route path='/contact' element={<Contact />} />
        <Route path='/feature' element={<Feature />} />
        <Route path='/product' element={<Product />} />
        <Route path='/service' element={<Service />} /> */}
        {/* <Route path='/team' element={<Team />} /> */}
        {/* <Route path='/testimonial' element={<Testimonial />} /> */}
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
