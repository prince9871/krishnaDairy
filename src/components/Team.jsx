import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      imgSrc: 'img/team-1.jpg',
      name: 'Aditya Kumar',
      position: 'Founder',
    },
    {
      imgSrc: 'img/team-2.jpg',
      name: 'Deepika Sharma',
      position: 'Veterinarian',
    },
    {
      imgSrc: 'img/team-3.jpg',
      name: 'Rajesh Sharma',
      position: 'Farmer',
    },
  ];
  

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 500}}>
          <p className="section-title bg-white text-center text-primary px-3">Our Team</p>
          <h1 className="mb-5">Experienced Team Members</h1>
        </div>
        <div className="row g-4">
          {teamMembers.map((member, index) => (
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${index * 0.2 + 0.1}s`} key={index}>
              <div className="team-item rounded p-4">
                <img className="img-fluid rounded mb-4" src={member.imgSrc} alt={member.name} />
                <h5>{member.name}</h5>
                <p className="text-primary">{member.position}</p>
                <div className="d-flex justify-content-center">
                  <a className="btn btn-square btn-outline-secondary rounded-circle mx-1" href="#"><i className="fab fa-facebook-f" /></a>
                  <a className="btn btn-square btn-outline-secondary rounded-circle mx-1" href="#"><i className="fab fa-twitter" /></a>
                  <a className="btn btn-square btn-outline-secondary rounded-circle mx-1" href="#"><i className="fab fa-instagram" /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
