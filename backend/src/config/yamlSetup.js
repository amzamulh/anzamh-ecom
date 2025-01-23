import YAMLjs from 'yamljs';
import swaggerUI from 'swagger-ui-express';
import OpenApiValidator from 'express-openapi-validator';

const yamlPath = './anzamh_ecom.yaml';
console.log(yamlPath);

const yamlConnect = (app) => {
  try {
    const swaggerDoc = YAMLjs.load(yamlPath);
    app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));
    app.use(
      OpenApiValidator.middleware({
        apiSpec: yamlPath,
      }),
    );
  } catch (e) {
    console.log('Yaml Not connected', e);
  }
};

export default yamlConnect;
