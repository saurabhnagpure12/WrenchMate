import React from 'react';
import './services.css';

const Services = () => {
  return (
    <section className="servicesSection">
      <div className="backgroundCircle1"></div>
      <div className="backgroundCircle2"></div>
      <div className="servicesHeader">
        <h2 className="ourServices">Our Services</h2>
        <p className="servicesDescription">
          Relish our premier automobile care services, merging simplicity with top-notch performance. Unwind and stay calm as we take care of everything. Our door-to-door pick up and drop off service makes car maintenance incredibly easy. Whether it's routine maintenance or complex fixes, our proficient technicians ensure your vehicle is functioning at its best, all while you relax at home. Take solace in the fact your car is being cared for by experts and experience the apex of automobile attention without stepping off your driveway.
        </p>
        <button className="knowMoreButton">Know more</button>
      </div>
      <div className="servicesGrid">
        <img src="./service.png" alt="Phone" className="phoneImage" />
      </div>
    </section>
  );
};

export default Services;
