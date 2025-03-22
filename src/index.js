import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { addHit, connect } from '../model/connect.js';

connect();

const app = express();

// CORS configuration
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Explicit preflight handling
app.options('/visit', cors());

app.post('/visit', async (req, res) => {
  try {
    const response = req.body;
    if (response) {
      console.log(response);
      await addHit(response);
      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/', (req, res) => {
  res.send('wrong portal');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
