import React from 'react'

const Banner = () => {
  return (
    <div>
      {/* Banner Start */}
      <div
        className='container-fluid banner my-5 py-5'
        data-parallax='scroll'
        data-image-src='img/banner.jpg'
      >
       <div className='container py-5'>
  <div className='row g-5'>
    <div className='col-lg-6 wow fadeIn' data-wow-delay='0.3s'>
      <div className='row g-4 align-items-center'>
        <div className='col-sm-4'>
          <img
            className='img-fluid rounded'
            src='img/banner-1.jpg'
            alt='Best Dairy Products'
          />
        </div>
        <div className='col-sm-8'>
          <h2 className='text-white mb-3'>
            We Sell Best Dairy Products
          </h2>
          <p className='text-white mb-4'>
            We take pride in offering the finest quality dairy products to our customers.
          </p>
          <a className='btn btn-secondary rounded-pill py-2 px-4' href='/products'>
            Read More
          </a>
        </div>
      </div>
    </div>
    <div className='col-lg-6 wow fadeIn' data-wow-delay='0.5s'>
      <div className='row g-4 align-items-center'>
        <div className='col-sm-4'>
          <img
            className='img-fluid rounded'
            src='img/banner-2.jpg'
            alt='Fresh Milk Worldwide'
          />
        </div>
        <div className='col-sm-8'>
          <h2 className='text-white mb-3'>
            We Deliver Fresh Milk Worldwide
          </h2>
          <p className='text-white mb-4'>
            Our commitment to freshness extends globally. We ensure that our milk reaches you in its purest form, no matter where you are. 
          </p>
          <a className='btn btn-secondary rounded-pill py-2 px-4' href='/products'>
            Read More
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
      {/* Banner End */}
    </div>
  )
}

export default Banner
