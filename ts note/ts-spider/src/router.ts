import { Router, Request, Response } from 'express';
import Crowller from './crowller';
import Analyzer from './analyzer';

interface RequestWithBody extends Request {
  body: {
    [key: string]: string | undefined;
  };
}

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send(`
    <html>
      <body>
        <form method="post" action="/getData">
          <input type="password" name="password" />
          <button>提交</button>
        </form>
      </body>
    </html>
  `);
});

router.get('/getData', (req: RequestWithBody, res: Response) => {
  const { password } = req.body;
  if (password === '123') {
    const secret = 'x3b174jsx';
    const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;
    const analyzer = Analyzer.getInstance();
    new Crowller(url, analyzer);
    res.send('get data success!');
  } else {
    res.send('password Error!');
  }
});

export default router;
