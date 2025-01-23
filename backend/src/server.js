import http from 'http';
import app from './app.js';
import { HOST, PORT } from './config/secretCode.js';
import yamlConnect from './config/yamlSetup.js';

yamlConnect(app);

const server = http.createServer(app);
const mainServer = () => {
  try {
    server.listen(PORT, () => {
      console.log(`Server is running:${HOST}:${PORT}`);
    });
  } catch (e) {
    console.log('Server error:', e);
  }
};

mainServer();
