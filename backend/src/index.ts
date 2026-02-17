import express, { type Request, type Response } from 'express';
import { PostgreHelper } from './database/database';
import cookieParser from 'cookie-parser';
import { configRouter } from './routes/configRouter';
import cors from 'cors';

export const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(configRouter());
const port = 3002;
export const dbConnection = PostgreHelper.getInstance();

(async () => {
  try {
    await dbConnection.connect();
    console.log('Connected');
  } catch (error: any) {
    console.log(error);
  }

  app.get('/', (req: Request, res: Response) => {
    return res.json('API is working');
  });

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on port ${port}`);
  });
})();
