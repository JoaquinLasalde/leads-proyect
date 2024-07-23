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
    <div className="bg-gray-900 min-h-screen text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-pale-orange mb-8 text-center font-sans">Generador de Leads</h1>
        <p className="text-xl text-gray-300 mb-8 text-center font-sans">
          Conectamos a compradores potenciales con los mejores concesionarios de automóviles.
        </p>
        <LeadForm onSubmit={handleLeadSubmit} />
        {successMessage && (
          <div className="mt-4 p-4 bg-green-800 border border-green-600 text-green-100 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">¡Éxito!</strong>
            <span className="block sm:inline"> {successMessage}</span>
          </div>
        )}
        {error && (
          <div className="mt-4 p-4 bg-red-800 border border-red-600 text-red-100 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Error:</strong>
            <span className="block sm:inline"> {error}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;