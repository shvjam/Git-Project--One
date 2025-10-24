import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      quote: "We’re constantly trying to bring the best the market has to offer to support our global business operations by identifying suppliers with the exact solution we need to solve our problem. In this case, we found an incredible partner in Hugo.",
      author: "Jason T.",
      title: "Director, Global Supplier Diversity",
      logo: "https://hugoinc.com/wp-content/uploads/2023/10/quote-test-logo.png"
    },
    {
      quote: "Everyone on my Hugo team could have successfully interviewed for our team in Brooklyn. That is important to me. We’re getting top-tier talent without the big city price tag.",
      author: "Chris M.",
      title: "Chief Operating Officer",
      logo: "https://hugoinc.com/wp-content/uploads/2023/10/consensys.png"
    },
    {
      quote: "The Hugo team is always flexible with process changes and commits 100% to making every interaction the best our clients have ever had on a daily basis.",
      author: "Sarah B.",
      title: "Director of Client Experience",
      logo: "https://hugoinc.com/wp-content/uploads/2023/10/logo-sakara.png"
    }
  ];

  return (
    <section className="testimonials">
      <h2>Your success is our mission</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.logo} alt="" className="testimonial-logo" />
            <p className="quote">"{testimonial.quote}"</p>
            <div className="author-info">
              <p className="author">{testimonial.author}</p>
              <p className="title">{testimonial.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
