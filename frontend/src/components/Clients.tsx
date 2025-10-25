import styles from './Clients.module.css';

function Clients() {
  // Assuming images are in src/assets/clients/
  const clients = [
    { name: 'Attentive', logo: '/src/assets/clients/Attentive.svg' },
    { name: 'Aurora', logo: '/src/assets/clients/Aurora.svg' },
    { name: 'Faire', logo: '/src/assets/clients/Faire.svg' },
    { name: 'Google', logo: '/src/assets/clients/Google.svg' },
    { name: 'Meta', logo: '/src/assets/clients/Meta.svg' },
    { name: 'Outschool', logo: '/src/assets/clients/Outschool.svg' },
    { name: 'Topicals', logo: '/src/assets/clients/Topicals.svg' },
    { name: 'Upwork', logo: '/src/assets/clients/Upwork.svg' },
  ];

  const duplicatedClients = [...clients, ...clients];

  return (
    <section className={styles.clients}>
      <div className={styles.clientLogos}>
        {duplicatedClients.map((client, index) => (
          <img key={index} src={client.logo} alt={client.name} />
        ))}
      </div>
    </section>
  );
}

export default Clients;
