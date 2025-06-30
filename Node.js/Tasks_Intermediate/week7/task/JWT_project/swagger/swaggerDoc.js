import swaggerUi from 'swagger-ui-express';
import path from 'path'
import YAML from 'yamljs';
import { fileURLToPath } from 'url'; // For __dirname equivalent

// ESM equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const swaggerDocument = YAML.load(path.join(__dirname, './swagger.yaml'))

const setupSwagger = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  console.log('Swagger UI configured at http://localhost:3000/api-docs');
};

export default setupSwagger;