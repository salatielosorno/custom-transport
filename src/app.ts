import express from 'express';
import { logger } from './Logger/Logger';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!!');
});

app.listen(port, () => {
  logger.log('info', "demo")
  logger.log('debug', 'demo debug')
  logger.log('warn', 'careful')
  return console.log(`Express is listening at http://localhost:${port} :)`);
});
