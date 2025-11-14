// test-express.js
import express from 'express';

const app = express();
app.get('/', (req, res) => res.send('Servidor Express con ES Modules activo 🚀'));
app.listen(3000, () => console.log('http://localhost:3000'));