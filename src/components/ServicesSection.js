
/**
 * import React from 'react';
import './ServicesSection.css';

const services = [
  { icon: '🦷', label: 'Cleaning' },
  { icon: '💲', label: 'Filling' },
  { icon: '✨', label: 'Whitening' },
  { icon: '🚨', label: 'Emergency' }
];

const ServicesSection = () => (
  <section className="services-section">
    <h3>Our Services</h3>
    <div className="services-list">
      {services.map((service, idx) => (
        <div key={idx} className="service-item">
          <div className="icon">{service.icon}</div>
          <p>{service.label}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ServicesSection;
 * 
 */