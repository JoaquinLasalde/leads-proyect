const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error conectando a MongoDB:', err));

const leadSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  carModel: String,
  budget: Number,
});

const Lead = mongoose.model('Lead', leadSchema);

// Solo mantenemos la ruta para crear nuevos leads
app.post('/api/leads', async (req, res) => {
  const lead = new Lead(req.body);
  try {
    const newLead = await lead.save();
    res.status(201).json({ message: 'Lead creado exitosamente' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});