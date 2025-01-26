import http from 'http';
import app from './app.js';
import { PORT, SERVER_URI, DB_LOCAL_URI } from './config/secret.js';
import yamlConnect from './config/yamlSetup.js';
import connectionMongoDB from './config/dbConnect.js';

yamlConnect(app);

const server = http.createServer(app);
const mainServer = () => {
  try {
    connectionMongoDB(DB_LOCAL_URI);
    server.listen(PORT, () => {
      console.log(`Server is running:${SERVER_URI}`);
    });
  } catch (e) {
    console.log('Server error:', e);
  }
};

mainServer();
