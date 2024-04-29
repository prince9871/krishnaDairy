import React from 'react';

const Product = () => {
  // Data for products
  const productsData = [
    {
      imgSrc: 'https://source.unsplash.com/600x400/?milk',
      name: 'Pure Milk',
      price: '$19.00',
      discountPrice: '$29.00',
    },
    {
      imgSrc: 'https://source.unsplash.com/600x400/?cheese',
      name: 'Cheese',
      price: '$19.00',
      discountPrice: '$29.00',
    },
    {
      imgSrc: 'https://source.unsplash.com/600x400/?butter',
      name: 'Butter',
      price: '$19.00',
      discountPrice: '$29.00',
    },
    {
      imgSrc: 'https://source.unsplash.com/600x400/?yogurt',
      name: 'Yogurt',
      price: '$19.00',
      discountPrice: '$29.00',
    },
    {
      imgSrc: 'https://source.unsplash.com/600x400/?cream',
      name: 'Cream',
      price: '$19.00',
      discountPrice: '$29.00',
    },
    {
      imgSrc: 'https://source.unsplash.com/600x400/?ghee',
      name: 'Ghee',
      price: '$19.00',
      discountPrice: '$29.00',
    },
    
    {
      imgSrc: 'https://source.unsplash.com/600x400/?cheese',
      name: 'Cheese',
      price: '$19.00',
      discountPrice: '$29.00',
    },
    {
      imgSrc: 'https://source.unsplash.com/600x400/?ice-cream',
      name: 'Ice Cream',
      price: '$19.00',
      discountPrice: '$29.00',
    },
    {
      imgSrc: 'https://source.unsplash.com/600x400/?milk-tea',
      name: 'Milk Tea',
      price: '$19.00',
      discountPrice: '$29.00',
    },
    {
      imgSrc: 'https://source.unsplash.com/600x400/?curd',
      name: 'Curd',
      price: '$19.00',
      discountPrice: '$29.00',
    },
    {
      imgSrc: 'https://source.unsplash.com/600x400/?milkshake',
      name: 'Chocolate Milkshake',
      price: '$19.00',
      discountPrice: '$29.00',
    },
    {
      imgSrc: 'https://source.unsplash.com/600x400/?milk-powder',
      name: 'Milk Powder',
      price: '$19.00',
      discountPrice: '$29.00',
    }
    
  ];
  

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: 500 }}
        >
          <p className="section-title bg-white text-center text-primary px-3">
            Our Products
          </p>
          <h1 className="mb-5">Our Dairy Products For Healthy Living</h1>
        </div>
        <div className="row gx-4">
          {productsData.map((product, index) => (
            <div
              key={index}
              className={`col-md-6 col-lg-4 col-xl-3 wow fadeInUp`}
              data-wow-delay={`${0.1 * index}s`}
            >
              <div className="product-item">
                <div className="position-relative">
                  <img
                    className="img-fluid"
                    src={product.imgSrc}
                    alt={product.name}
                  />
                  <div className="product-overlay">
                    <a className="btn btn-square btn-secondary rounded-circle m-1" href="#">
                      <i className="bi bi-link" />
                    </a>
                    <a className="btn btn-square btn-secondary rounded-circle m-1" href="#">
                      <i className="bi bi-cart" />
                    </a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <a className="d-block h5" href="#">
                    {product.name}
                  </a>
                  {/* <span className="text-primary me-1">{product.price}</span>
                  <span className="text-decoration-line-through">
                    {product.discountPrice}
                  </span> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
