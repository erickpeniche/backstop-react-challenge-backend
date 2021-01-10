import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());

app.listen(port, () => {
  console.log(`Back-End listening at http://localhost:${port}`);
});

export default app;
