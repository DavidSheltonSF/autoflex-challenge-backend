import express, {type Request, type Response} from 'express';

const app = express();
const port = 3001;

app.get("/", (req: Request, resp: Response) => {
  return resp.json("API is working");
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})