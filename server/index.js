import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './router.js';

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
