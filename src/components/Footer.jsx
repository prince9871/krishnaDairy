import React from 'react'

const Footer = () => {
  return (
    <div>
  {/* Footer Start */}
  <div className="container-fluid bg-dark footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-3 col-md-6">
          <h5 className="text-white mb-4">Our Office</h5>
          <p className="mb-2" style={{ color: 'white', textDecoration: 'none' }}><i className="fa fa-map-marker-alt me-3" />Shastri Nagar Badla Chauraha, Harni Mahadev Road, Gali No.5, Bhilwara,Rajasthan</p>
          <p className="mb-2">
  <i className="fa fa-phone-alt me-3" />
  <a href="tel:09928693636" style={{ color: 'white', textDecoration: 'none' }}>099286 93636</a>
</p>
<p className="mb-2">
  <i className="fa fa-envelope me-3" />
  <a href="mailto:krishnadairybhilwara@gmail.com" style={{ color: 'white', textDecoration: 'none' }}>krishnadairybhilwara@gmail.com</a>
</p>

          <div className="d-flex pt-3">
            <a className="btn btn-square btn-secondary rounded-circle me-2" href><i className="fab fa-twitter" /></a>
            <a className="btn btn-square btn-secondary rounded-circle me-2" href><i className="fab fa-facebook-f" /></a>
            <a className="btn btn-square btn-secondary rounded-circle me-2" href><i className="fab fa-youtube" /></a>
            <a className="btn btn-square btn-secondary rounded-circle me-2" href><i className="fab fa-linkedin-in" /></a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h5 className="text-white mb-4">Quick Links</h5>
          <a className="btn btn-link" href='about'>About Us</a>
          <a className="btn btn-link" href='contact'>Contact Us</a>
          <a className="btn btn-link" href='services'>Our Services</a>
          <a className="btn btn-link" href='products'>Products</a>
          <a className="btn btn-link" href='/team'>Our Support</a>
        </div>
        <div className="col-lg-3 col-md-6">
          <h5 className="text-white mb-4">Business Hours</h5>
          <p className="mb-1">Monday - Friday</p>
          <h6 className="text-light">08:00 am - 10:00 pm</h6>
          <p className="mb-1">Saturday</p>
          <h6 className="text-light">08:00 am - 10:00 pm</h6>
          <p className="mb-1">Sunday</p>
          <h6 className="text-light">09:00 am - 10:00 pm</h6>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
  {/* Copyright Start */}
  <div className="container-fluid bg-secondary text-body copyright py-4">
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
          © <a className="fw-semi-bold" href="#">Krishna Dairy Bhilwara</a>, All Right Reserved.
        </div>
        <div className="col-md-6 text-center text-md-end">
          {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
          Designed By <a className="fw-semi-bold" href="https://princesoniwebdev.netlify.app">Prince Soni</a>
        </div>
      </div>
    </div>
  </div>
  {/* Copyright End */}
</div>

  )
}

export default Footer
