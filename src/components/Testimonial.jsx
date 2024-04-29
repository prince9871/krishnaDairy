import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

const Testimonial = () => {
    const testimonialItems = [
        {
          imgSrc: 'img/testimonial-1.jpg',
          content:
            'The special thing about Krishna Dairy\'s milk is that it is always fresh and delicious. Starting the day with a glass of milk from Krishna Dairy makes the day much better!',
          clientName: 'Suresh Kumar',
          profession: 'Loyal Customer'
        },
        {
          imgSrc: 'img/testimonial-2.jpg',
          content:
            'The taste of Krishna Dairy\'s paneer is incomparable. Every bite brings the authentic flavor of real milk. I have always been a fan of this paneer!',
          clientName: 'Ritu Jain',
          profession: 'Regular Customer'
        },
        {
          imgSrc: 'img/testimonial-3.jpg',
          content:
            'The aroma and taste of Krishna Dairy\'s ghee are exquisite. Using it in every meal brings me peace of mind. This ghee has always been an important ingredient in my kitchen.',
          clientName: 'Prince Soni',
          profession: 'Gymaholic'
        },
        {
          imgSrc: 'img/testimonial-4.jpg',
          content:
            'The real taste of milk shines through in Krishna Dairy\'s Paneer. Every scoop feels like real natural ingredients have been used. My favorite flavor is vanilla!',
          clientName: 'Shweta Singh',
          profession: 'Paneer Connoisseur'
        }
      ];
      
  return (
    <div>
      <>
        <div className='container-xxl py-5'>
          <div className='container'>
            <div
              className='text-center mx-auto wow fadeInUp'
              data-wow-delay='0.1s'
              style={{ maxWidth: '500px' }}
            >
              <p className='section-title bg-white text-center text-primary px-3'>
                Testimonial
              </p>
              <h1 className='mb-5'>What People Say About Our Dairy Farm</h1>
            </div>
            <div className='row g-5 align-items-center'>
              <div className='col-lg-5 wow fadeInUp' data-wow-delay='0.1s'>
                <div className='testimonial-img'>
                  <img
                    className='img-fluid animated pulse infinite'
                    src='img/testimonial-1.jpg'
                    alt=''
                  />
                  <img
                    className='img-fluid animated pulse infinite'
                    src='img/testimonial-2.jpg'
                    alt=''
                  />
                  <img
                    className='img-fluid animated pulse infinite'
                    src='img/testimonial-3.jpg'
                    alt=''
                  />
                  <img
                    className='img-fluid animated pulse infinite'
                    src='img/testimonial-4.jpg'
                    alt=''
                  />
                </div>
              </div>

              <div className='col-lg-7 wow fadeInUp' data-wow-delay='0.5s'>
                <OwlCarousel
                  className='owl-carousel testimonial-carousel'
                  items={1}
                  loop
                  nav
                >
                  {testimonialItems.map((item, index) => (
                    <div className='testimonial-item' key={index}>
                      <img
                        className='img-fluid mb-3'
                        src={item.imgSrc}
                        alt=''
                        style={{ height: '100px', width: '100px' }}
                      />
                      <p className='fs-5'>{item.content}</p>
                      <h5>{item.clientName}</h5>
                      <span className='text-primary'>{item.profession}</span>
                    </div>
                  ))}
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  )
}

export default Testimonial
