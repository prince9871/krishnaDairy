import React from 'react'
import CountUp from 'react-countup';


const Feature = () => {
  return (
    <div>
      {/* Features Start */}
      <div className='container-xxl py-5'>
        <div className='container'>
          <div className='row g-5 align-items-center'>


          <div className='col-lg-6 wow fadeInUp' data-wow-delay='0.1s'>
  <p className='section-title bg-white text-start text-primary pe-3'>
    Why Us!
  </p>
  <h1 className='mb-4'>Few Reasons Why People Choose Us!</h1>
  <p className='mb-4'>
    We have become the preferred choice for many customers due to several reasons.
    
  </p>
  <p>
    <i className='fa fa-check text-primary me-3' />
    Quality products and services
  </p>
  <p>
    <i className='fa fa-check text-primary me-3' />
    Excellent customer support
  </p>
  <p>
    <i className='fa fa-check text-primary me-3' />
    Commitment to customer satisfaction
  </p>
  <a className='btn btn-secondary rounded-pill py-3 px-5 mt-3' href='/about'>
    Explore More
  </a>
</div>



            <div className='col-lg-6'>
              <div className='rounded overflow-hidden'>
                <div className='row g-0'>
                  <div className='col-sm-6 wow fadeIn' data-wow-delay='0.1s'>
                    <div className='text-center bg-primary py-5 px-4'>
                      <img
                        className='img-fluid mb-4'
                        src='img/experience.png'
                        alt
                      />
                      <h1
                        className='display-6 text-white'
                        data-toggle='counter-up'
                      >
                      <CountUp end={25} duration={4} />
                        
                      </h1>
                      <span className='fs-5 fw-semi-bold text-secondary'>
                        Years Experience
                      </span>
                    </div>
                  </div>
                  <div className='col-sm-6 wow fadeIn' data-wow-delay='0.3s'>
                    <div className='text-center bg-secondary py-5 px-4'>
                      <img className='img-fluid mb-4' src='img/award.png' alt />
                      <h1 className='display-6' data-toggle='counter-up'>
                      <CountUp end={183} duration={4} />
                        
                      </h1>
                      <span className='fs-5 fw-semi-bold text-primary'>
                        Award Winning
                      </span>
                    </div>
                  </div>
                  <div className='col-sm-6 wow fadeIn' data-wow-delay='0.5s'>
                    <div className='text-center bg-secondary py-5 px-4'>
                      <img
                        className='img-fluid mb-4'
                        src='img/animal.png'
                        alt
                      />
                      <h1 className='display-6' data-toggle='counter-up'>
                      <CountUp end={2619} duration={4} />

                        
                      </h1>
                      <span className='fs-5 fw-semi-bold text-primary'>
                        Total Animals
                      </span>
                    </div>
                  </div>
                  <div className='col-sm-6 wow fadeIn' data-wow-delay='0.7s'>
                    <div className='text-center bg-primary py-5 px-4'>
                      <img
                        className='img-fluid mb-4'
                        src='img/client.png'
                        alt
                      />
                      <h1
                        className='display-6 text-white'
                        data-toggle='counter-up'
                      >
                                            <CountUp end={51940} duration={4} />

                        
                      </h1>
                      <span className='fs-5 fw-semi-bold text-secondary'>
                        Happy Clients
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Features End */}
    </div>
  )
}

export default Feature
