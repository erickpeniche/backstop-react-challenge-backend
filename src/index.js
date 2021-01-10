import express from 'express';
import cors from 'cors';
import DigimonRoutes from './routes/digimon';

const app = express();
const port = 3000;

app.use(cors());
app.use('/api/v1/digimon', DigimonRoutes);

app.listen(port, () => {
  console.log(`Back-End listening at http://localhost:${port}`);
});

export default app;
