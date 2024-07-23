import React, { useState } from 'react';
import LeadForm from '../components/LeadForm';
import api from '../api';

function Home() {
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState(null);

  const handleLeadSubmit = async (newLeadData) => {
    try {
      await api.post('/leads', newLeadData);
      setSuccessMessage('¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.');
      setError(null);
    } catch (err) {
      setError('Hubo un error al enviar tu información. Por favor, intenta de nuevo.');
      setSuccessMessage('');
      console.error('Error adding new lead:', err);
    }
  };

  return (
    <div>
      <h1>Generador de Leads Automotrices</h1>
      <LeadForm onSubmit={handleLeadSubmit} />
      {successMessage && <p className="success-message">{successMessage}</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default Home;