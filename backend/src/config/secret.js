import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'http://localhost';

const SERVER_URI = `${HOST}:${PORT}`;

const DB_NAME = process.env.DB_NAME;
// const DB_PASSWORD = process.env.DB_PASSWORD;
// const DB_USERNAME = process.env.DB_USERNAME;
// const DB_CONNECTION_QUERY = process.env.DB_CONNECTION_QUERY;

// Local Connection
let DB_LOCAL_URI = process.env.DB_LOCAL_URI;
DB_LOCAL_URI = `${DB_LOCAL_URI}/${DB_NAME}`;

// Live Db url
// let DB_LIVE_URI = process.env.DB_LIVE_URL;
// DB_LIVE_URI = DB_LIVE_URI.replace('<username>', DB_USERNAME);
// DB_LIVE_URI = DB_LIVE_URI.replace('<password>', DB_PASSWORD);
// DB_LIVE_URI = `${DB_LIVE_URI}/${DB_NAME}?${DB_CONNECTION_QUERY}`;

export { PORT, SERVER_URI, DB_LOCAL_URI };
