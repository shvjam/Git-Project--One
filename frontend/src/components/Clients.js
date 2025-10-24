import React from 'react';

function Clients() {
  const clients = [
    { name: 'Attentive', logo: 'https://hugoinc.com/wp-content/uploads/2023/10/Attentive.svg' },
    { name: 'Aurora', logo: 'https://hugoinc.com/wp-content/uploads/2023/10/Aurora.svg' },
    { name: 'Faire', logo: 'https://hugoinc.com/wp-content/uploads/2023/10/Faire.svg' },
    { name: 'Google', logo: 'https://hugoinc.com/wp-content/uploads/2023/10/Google.svg' },
    { name: 'Meta', logo: 'https://hugoinc.com/wp-content/uploads/2023/10/Meta.svg' },
    { name: 'Outschool', logo: 'https://hugoinc.com/wp-content/uploads/2023/10/Outschool.svg' },
    { name: 'Topicals', logo: 'https://hugoinc.com/wp-content/uploads/2023/10/Topicals.svg' },
    { name: 'Upwork', logo: 'https://hugoinc.com/wp-content/uploads/2023/10/Upwork.svg' },
  ];

  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="clients">
      <div className="client-logos">
        {duplicatedClients.map((client, index) => (
          <img key={index} src={client.logo} alt={client.name} />
        ))}
      </div>
    </section>
  );
}

export default Clients;
