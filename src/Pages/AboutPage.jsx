import React from 'react'
import About from '../components/AboutUs'
import Banner from '../components/Banner'
import Team from '../components/Team'

const AboutPage = () => {
  return <div>

{/* Page Header Start */}
<div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
  <div className="container text-center py-5">
    <h1 className="display-3 text-white mb-4 animated slideInDown">About Us</h1>
    <nav aria-label="breadcrumb animated slideInDown">
      <ol className="breadcrumb justify-content-center mb-0">
        <li className="breadcrumb-item"><a href="#">Home</a></li>
        <li className="breadcrumb-item"><a href="#">Pages</a></li>
        <li className="breadcrumb-item active" aria-current="page">About</li>
      </ol>
    </nav>
  </div>
</div>
{/* Page Header End */}

<About/>
<Banner/>
<Team/>


  </div>
}

export default AboutPage
