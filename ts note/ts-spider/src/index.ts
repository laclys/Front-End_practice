import express, { Request, Response } from 'express';
import router from './router';

const app = express();
app.use(router);

app.listen(7001, () => [console.log('server is running')]);
