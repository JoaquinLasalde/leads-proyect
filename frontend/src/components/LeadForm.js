import React, { useState } from 'react';

function LeadForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    carModel: '',
    budget: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      carModel: '',
      budget: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Nombre completo"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Correo electrónico"
        required
      />
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Teléfono"
        required
      />
      <input
        type="text"
        name="carModel"
        value={formData.carModel}
        onChange={handleChange}
        placeholder="Modelo de auto de interés"
        required
      />
      <input
        type="number"
        name="budget"
        value={formData.budget}
        onChange={handleChange}
        placeholder="Presupuesto estimado"
        required
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default LeadForm;