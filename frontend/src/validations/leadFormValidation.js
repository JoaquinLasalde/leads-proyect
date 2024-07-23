export const validateLeadForm = (values) => {
    const errors = {};
    
    if (!values.name) {
      errors.name = 'El nombre es obligatorio';
    }
    
    if (!values.email) {
      errors.email = 'El correo electrónico es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Correo electrónico inválido';
    }
    
    if (!values.phone) {
      errors.phone = 'El teléfono es obligatorio';
    }
    
    if (!values.carModel) {
      errors.carModel = 'El modelo de auto es obligatorio';
    }
    
    if (!values.budget) {
      errors.budget = 'El presupuesto es obligatorio';
    } else if (isNaN(values.budget) || Number(values.budget) <= 0) {
      errors.budget = 'El presupuesto debe ser un número positivo';
    }
    
    return errors;
  };