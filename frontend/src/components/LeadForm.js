import React, { useState } from 'react';
import { validateLeadForm } from '../validations/leadFormValidation';

function LeadForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    carModel: '',
    budget: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setErrors(prevErrors => ({ ...prevErrors, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateLeadForm(formData);
    if (Object.keys(formErrors).length === 0) {
      onSubmit(formData);
      setFormData({
        name: '',
        email: '',
        phone: '',
        carModel: '',
        budget: ''
      });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  const inputClasses = "mt-1 block w-full rounded-md border-gray-600 bg-gray-700 shadow-sm focus:border-pale-orange focus:ring-pale-orange text-sm h-10 text-gray-200 px-4";

  return (
    <div className="bg-gray-800 py-12 px-6 sm:px-10 rounded-lg shadow-lg max-w-4xl mx-auto my-10 border border-gray-700">
      <h2 className="text-3xl font-bold text-pale-orange mb-4 text-center font-sans">Encuentra tu auto ideal</h2>
      <p className="text-center text-gray-400 mb-8 font-sans">Completa el formulario y te conectaremos con los mejores concesionarios</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1 font-sans">Nombre completo</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className={`${inputClasses} ${errors.name ? 'border-red-500' : 'border-gray-600'}`}
              placeholder="Juan Pérez"
            />
            {errors.name && <p className="mt-2 text-xs text-red-400 font-sans">{errors.name}</p>}
          </div>
          <div className="relative">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1 font-sans">Correo electrónico</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={`${inputClasses} ${errors.email ? 'border-red-500' : 'border-gray-600'}`}
              placeholder="juan@ejemplo.com"
            />
            {errors.email && <p className="mt-2 text-xs text-red-400 font-sans">{errors.email}</p>}
          </div>
          <div className="relative">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1 font-sans">Teléfono</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`${inputClasses} ${errors.phone ? 'border-red-500' : 'border-gray-600'}`}
              placeholder="(123) 456-7890"
            />
            {errors.phone && <p className="mt-2 text-xs text-red-400 font-sans">{errors.phone}</p>}
          </div>
          <div className="relative">
            <label htmlFor="carModel" className="block text-sm font-medium text-gray-300 mb-1 font-sans">Modelo de auto de interés</label>
            <input
              type="text"
              name="carModel"
              id="carModel"
              value={formData.carModel}
              onChange={handleChange}
              className={`${inputClasses} ${errors.carModel ? 'border-red-500' : 'border-gray-600'}`}
              placeholder="Ej: Toyota Corolla"
            />
            {errors.carModel && <p className="mt-2 text-xs text-red-400 font-sans">{errors.carModel}</p>}
          </div>
        </div>
        <div className="relative flex flex-col items-center">
          <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-1 font-sans">Presupuesto estimado</label>
          <div className="mt-1 relative rounded-md shadow-sm w-1/3">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-400 sm:text-sm">$</span>
            </div>
            <input
              type="number"
              name="budget"
              id="budget"
              value={formData.budget}
              onChange={handleChange}
              className={`${inputClasses} pl-7 ${errors.budget ? 'border-red-500' : 'border-gray-600'}`}
              placeholder="0.00"
            />
          </div>
          {errors.budget && <p className="mt-2 text-xs text-red-400 font-sans">{errors.budget}</p>}
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-800 bg-pale-orange hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pale-orange font-sans transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            Enviar solicitud
          </button>
        </div>
      </form>
    </div>
  );
}

export default LeadForm;