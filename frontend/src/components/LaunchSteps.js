import React from 'react';

function LaunchSteps() {
  const steps = [
    {
      title: "Deep dive into your goals and team structure.",
      description: "We take the time to understand your unique needs and goals. Our talent becomes an extension of your team, supporting your customer experience initiatives within your strategic direction, timelines and budgets."
    },
    {
      title: "We design a customized solution for you.",
      description: "Within 1 week, we'll design a customized solution tailored to your unique needs. This includes selecting the right talent, customizing training and onboarding, and integrating with your existing processes - optimized for you."
    },
    {
      title: "Review and assemble your dream team.",
      description: "Let us handle the screening and recruitment so you can build your dream team. We identify candidates who match your precise needs, coordinate interviews, collect your feedback, and refine the applicant pool until you land on just the right hires."
    },
    {
      title: "We'll implement a dedicated training program.",
      description: "Our training, onboarding and assessments integrate with your processes while optimizing for scale and cultural nuance. We develop programs tailored to complement your approach."
    },
    {
      title: "Go Live & schedule check-ins!",
      description: "Curtains Up - Your dedicated team is now fully operational. We will set up regular check-ins that work with your schedule, not ours. This ensures you have ongoing visibility into performance and can provide timely feedback based on your availability."
    }
  ];

  return (
    <section className="launch-steps">
      <h2>Launch in 5 easy steps</h2>
      <p>We source, train, and assemble your new team in as little as 2 weeks. Once you go live, we continuously work to ensure you hit KPIs.</p>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step-card">
            <div className="step-number">{index + 1}</div>
            <div className="step-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LaunchSteps;
