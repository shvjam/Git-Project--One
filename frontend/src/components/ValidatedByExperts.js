import React from 'react';

function ValidatedByExperts() {
  const reviews = [
    {
      title: "Best BPO We've worked with",
      text: "With Hugo’s assistance, we’ve been able to 3X our content output with almost 100% audio and video accuracy. Hugo ensures the content is up to standards, and we’ve been impressed with the ease of collaborating with the team.",
      author: "Head of Video Production",
      industry: "Industry: Media"
    },
    {
      title: "Hugo: Consistently Delivering Excellent Outcomes",
      text: "Thanks to Hugo, we’ve scaled our affiliate program to more than 800 global ambassadors. The team’s work also helped reduce customer support tickets by 50% per month and response times to less than an hour. Overall, they stand out for their proactive approach, flexibility, and professionalism.",
      author: "VP of Growth",
      industry: "Industry: Gaming"
    },
    {
      title: "Hugo: A Partner with Exceptional Understanding of Our Culture",
      text: "Hugo has provided strategies and solutions to significantly reduce ticket response times. The team’s ability to cater to customers from diverse linguistic backgrounds makes the workflow seamless. Above all, we appreciate their flexibility, adaptability, and punctuality in meetings.",
      author: "Customer Support Manager",
      industry: "Industry: Food & Beverage"
    }
  ];

  return (
    <section className="validated-by-experts">
      <h2>Validated by experts, valued by customers</h2>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <h3>{review.title}</h3>
            <p>{review.text}</p>
            <div className="review-author">
              <p>{review.author}</p>
              <p>{review.industry}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ValidatedByExperts;
