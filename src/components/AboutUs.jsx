import React from 'react'
import CountUp from 'react-countup';


const AboutUs = () => {
  return (
    <div>
     <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-end">
            <div className="col-lg-6">
              <div className="row g-2">
                <div className="col-6 position-relative wow fadeIn" data-wow-delay="0.7s">
                  <div className="about-experience bg-secondary rounded">
                    <h1 className="display-1 mb-0">
                    <CountUp end={25} duration={4} />

                    </h1>
                    <small className="fs-5 fw-bold">Years Experience</small>
                  </div>
                </div>
                <div className="col-6 wow fadeIn" data-wow-delay="0.1s">
                  <img className="img-fluid rounded" src="img/service-1.jpg" alt="Service 1" />
                </div>
                <div className="col-6 wow fadeIn" data-wow-delay="0.3s">
                  <img className="img-fluid rounded" src="img/service-2.jpg" alt="Service 2" />
                </div>
                <div className="col-6 wow fadeIn" data-wow-delay="0.5s">
                  <img className="img-fluid rounded" src="img/service-3.jpg" alt="Service 3" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div>
                <p className="section-title bg-white text-start text-primary pe-3">About Us</p>
                <h1 className="mb-4">Know About Our Dairy Farm &amp; Our History</h1>
                <p className="mb-4">We take pride in our dairy farm and its rich history.</p>
                <div className="row g-5 pt-2 mb-5">
                  <div className="col-sm-6">
                    <img className="img-fluid mb-4" src="img/service.png" alt="Dedicated Services" />
                    <h5 className="mb-3">Dedicated Services</h5>
                    <span>We are committed to providing dedicated services to our customers.</span>
                  </div>
                  <div className="col-sm-6">
                    <img className="img-fluid mb-4" src="img/product.png" alt="Organic Products" />
                    <h5 className="mb-3">Organic Products</h5>
                    <span>Our dairy farm produces organic products that are healthy and natural.</span>
                  </div>
                </div>
                <a className="btn btn-secondary rounded-pill py-3 px-5" href="/products">Explore More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default AboutUs
