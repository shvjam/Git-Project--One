import React from 'react';

function Services() {
  const services = [
    {
      title: "Customer Support",
      description: "Across time zones, languages, cultures, and channels, we’ll leave your customers feeling great about your brand…even if it’s a bad day."
    },
    {
      title: "Data & AI",
      description: "Process and build with better, less biased, more accurate training data. You know your end product depends on it; we do too."
    },
    {
      title: "Trust & Safety",
      description: "Better compliance, higher engagement, and safer spaces. We’ll keep your users playing by your rules."
    },
    {
      title: "Digital Operations",
      description: "Crash costs cut friction, and boost efficiency. We’ll help you scale your operations faster and more profitably… and put years back on your life."
    }
  ];

  return (
    <section className="services">
      <h2>+ More Growth, Less Risk</h2>
      <div className="service-cards">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="#">Learn More</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
