import { motion } from 'framer-motion';
import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Outsourcing+
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Built to make you better.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        We’re not traditional outsourcers. We build world-class teams—from customer support to AI data solutions—helping you scale faster and smarter.
      </motion.p>
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Build your Dream Team
      </motion.button>
    </section>
  );
}

export default Hero;
