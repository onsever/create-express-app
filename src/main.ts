import server from '@root/server';
import pino from 'pino';

const logger = pino({
  level: 'info'
});

const PORT: number = Number(process.env.PORT) || 3000;
const HOSTNAME: string = process.env.HOSTNAME || 'localhost';

server
  .listen(PORT, HOSTNAME, () => {
    logger.info(`Example app listening on port ${PORT}!`);
  })
  .on('error', (err: Error) => {
    logger.error(err);
  });
