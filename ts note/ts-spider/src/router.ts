import { Router, Request, Response } from 'express';
import Crowller from './crowller';
import Analyzer from './analyzer';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('hello word');
});

router.get('/getData', (req: Request, res: Response) => {
  const secret = 'x3b174jsx';
  const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;
  const analyzer = Analyzer.getInstance();
  new Crowller(url, analyzer);
  res.send('get data success!');
});

export default router;
