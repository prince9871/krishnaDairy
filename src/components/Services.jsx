import React from 'react';

const Services = () => {
  // Data for services
  const servicesData = [
    {
      imgSrc: 'img/service-1.jpg',
      title: 'Best Animal Selection',
      description: 'We pride ourselves on selecting the best animals for our farm, ensuring high-quality dairy products.',
    },
    {
      imgSrc: 'img/service-2.jpg',
      title: 'Breeding & Veterinary',
      description: 'Our expert team handles breeding and veterinary services with utmost care to ensure healthy livestock.',
    },
    {
      imgSrc: 'img/service-3.jpg',
      title: 'Care & Milking',
      description: 'Our dedicated staff ensures proper care and gentle milking techniques for happy and healthy cows.',
    },
  ];

  return (
    <div className='container-xxl py-5'>
      <div className='container'>
        <div
          className='text-center mx-auto pb-4 wow fadeInUp'
          data-wow-delay='0.1s'
          style={{ maxWidth: 500 }}
        >
          <p className='section-title bg-white text-center text-primary px-3'>
            Our Services
          </p>
          <h1 className='mb-5'>Services That We Offer For Entrepreneurs</h1>
        </div>
        <div className='row gy-5 gx-4'>
          {servicesData.map((service, index) => (
            <div
              key={index}
              className='col-lg-4 col-md-6 pt-5 wow fadeInUp'
              data-wow-delay={`${0.1 * (index + 1)}s`}
            >
              <div className='service-item d-flex h-100'>
                <div className='service-img'>
                  <img className='img-fluid' src={service.imgSrc} alt={service.title} />
                </div>
                <div className='service-text p-5 pt-0'>
                  <div className='service-icon'>
                    <img
                      className='img-fluid rounded-circle'
                      src={service.imgSrc}
                      alt={`${service.title} Icon`}
                    />
                  </div>
                  <h5 className='mb-3'>{service.title}</h5>
                  <p className='mb-4'>{service.description}</p>
                  <a className='btn btn-square rounded-circle' href='#'>
                    <i className='bi bi-chevron-double-right' />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
