import Clients from '../Clients/Clients';
import DeserveBetter from '../DeserveBetter/DeserveBetter';
import LaunchSteps from '../LaunchSteps/LaunchSteps';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import ValidatedByExperts from '../ValidatedByExperts/ValidatedByExperts';
import WhatsNew from '../WhatsNew/WhatsNew';
import styles from './Main.module.css';

function Main() {
  return (
    <main className={styles.main}>
      {/* Hero Section would go here, creating it next */}
      <Clients />
      <DeserveBetter />
      <Testimonials />
      <Services />
      <LaunchSteps />
      <ValidatedByExperts />
      <WhatsNew />
    </main>
  );
}

export default Main;
