import { createServer } from '@config/express-config.js';
import { errorHandler } from '@utils/errorHandler.js';

const app = createServer();
app.use(errorHandler);

app.listen(3000, () => {
    console.log('Servidor Express modular activo en http://localhost:3000');
});