import express from 'express';
const app = express();
app.use(express.json());

app.use('/health', (_req, res) => {
  try {
    res.status(200).json({
      status: res.statusCode,
      health: 'ok',
    });
  } catch (e) {
    console.log('Health Api is not work properly', e);
  }
});

export default app;
