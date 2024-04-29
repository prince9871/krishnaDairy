import React from 'react';

const Carousel = () => {
  const carouselItems = [
    {
      imgSrc: 'img/carousel-1.jpg',
      caption: 'Welcome to our dairy farm',
      heading: 'The Farm of Dairy products',
      buttonText: 'Explore More',
      buttonLink: '/products'
    },
    {
      imgSrc: 'img/carousel-2.jpg',
      caption: 'Welcome to our dairy farm',
      heading: 'Best Organic Dairy Products',
      buttonText: 'Explore More',
      buttonLink: '/products'
    }
  ];

  return (
    <div>
      {/* Carousel Start */}
      <div className="container-fluid px-0 mb-5">
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {carouselItems.map((item, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <img className="w-100" src={item.imgSrc} alt="Image" />
                <div className="carousel-caption">
                  <div className="container">
                    <div className={`row justify-content-${index === 0 ? 'start' : 'end'}`}>
                      <div className={`col-lg-8 text-${index === 0 ? 'start' : 'end'}`}>
                        <p className="fs-4 text-white">{item.caption}</p>
                        <h1 className="display-1 text-white mb-5 animated slideInRight">{item.heading}</h1>
                        <a href={item.buttonLink} className="btn btn-secondary rounded-pill py-3 px-5 animated slideInRight">{item.buttonText}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* Carousel End */}
    </div>
  );
};

export default Carousel;
