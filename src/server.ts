import express, { json, urlencoded } from 'express';
import { createServer } from 'http';
import hpp from 'hpp';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import cookieSession from 'cookie-session';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config({});

const app = express();

app.use(morgan('dev'));
app.use(
  cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    secure: false
  })
);
app.use(hpp());
app.use(helmet());
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);
app.use(compression());
app.use(
  json({
    limit: '50mb'
  })
);
app.use(urlencoded({ extended: true, limit: '50mb' }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const server = createServer(app);

export default server;
