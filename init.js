const fs = require('fs');
const path = require('path');

const directoriesToCreate = [
  'mongodb_data',
  // Añade aquí otros directorios que necesites crear
];

// Determinar la ruta raíz del proyecto
const projectRoot = path.resolve(__dirname);

directoriesToCreate.forEach(dir => {
  const dirPath = path.join(projectRoot, dir);
  if (!fs.existsSync(dirPath)) {
    try {
      fs.mkdirSync(dirPath);
      console.log(`Directorio creado: ${dirPath}`);
    } catch (err) {
      console.error(`Error al crear el directorio ${dirPath}:`, err);
    }
  } else {
    console.log(`El directorio ya existe: ${dirPath}`);
  }
});

console.log('Inicialización completada.');