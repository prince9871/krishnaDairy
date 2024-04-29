import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    

<div>
  {/* Topbar Start */}
  <div className="container-fluid bg-dark px-0">
    <div className="row g-0 d-none d-lg-flex">
      <div className="col-lg-6 ps-5 text-start">
        <div className="h-100 d-inline-flex align-items-center text-light">
          <span>Follow Us:</span>
          <a className="btn btn-link text-light" href><i className="fab fa-facebook-f" /></a>
          <a className="btn btn-link text-light" href><i className="fab fa-twitter" /></a>
          <a className="btn btn-link text-light" href><i className="fab fa-whatsapp" /></a>
          <a className="btn btn-link text-light" href><i className="fab fa-instagram" /></a>
        </div>
      </div>
      <div className="col-lg-6 text-end">
        <div className="h-100 bg-secondary d-inline-flex align-items-center text-dark py-2 px-4">
        <a href="tel:09928693636">
          <span className="me-2 fw-semi-bold"><i className="fa fa-phone-alt me-2" />Call Us:</span>
          <span>099286 93636</span>
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Topbar End */}
  {/* Navbar Start */}
  <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5">
    <a href="/" className="navbar-brand d-flex align-items-center">
      <h1 className="m-0">Krishna Dairy</h1>
    </a>
    <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto p-4 p-lg-0">
        <Link to="/" className="nav-item nav-link active">Home</Link>
        <a href="/about" className="nav-item nav-link">About</a>
        <a href="/services" className="nav-item nav-link">Services</a>
        <a href="/products" className="nav-item nav-link">Products</a>
        <div className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
          <div className="dropdown-menu bg-light m-0">
            <a href="/features" className="dropdown-item">Features</a>
            <a href="/team" className="dropdown-item">Our Team</a>
            <a href="/testimonial" className="dropdown-item">Testimonial</a>

         </div>
        </div>
        <Link to="/contact" className="nav-item nav-link">Contact</Link>
      </div>
      {/* <div className="border-start ps-4 d-none d-lg-block">
        <button type="button" className="btn btn-sm p-0"><i className="fa fa-search" /></button>
      </div> */}
    </div>
  </nav>
  {/* Navbar End */}
</div>

      

  )
}

export default Navbar
