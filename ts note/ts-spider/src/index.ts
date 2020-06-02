import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import router from './router';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req: Request, res: Response, next: NextFunction) => {
  req.nnname = 'Lac';
  next();
});
app.use(router);

app.listen(7001, () => [console.log('server is running')]);
