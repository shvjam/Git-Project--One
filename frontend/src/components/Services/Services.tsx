import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Services.module.css';

gsap.registerPlugin(ScrollTrigger);

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

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gsap.utils.toArray<HTMLDivElement>('.service-card-animation');

    cards.forEach((card) => {
      gsap.fromTo(card,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%', // Start animation when the top of the card is 80% from the top of the viewport
            toggleActions: 'play none none none',
          }
        }
      );
    });
  }, []);

  return (
    <section className={styles.services} ref={containerRef}>
      <h2 className={styles.title}>+ More Growth, Less Risk</h2>
      <div className={styles.serviceCards}>
        {services.map((service, index) => (
          <div key={index} className={`${styles.serviceCard} service-card-animation`}>
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
