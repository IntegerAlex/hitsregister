import express from 'express';
import cors from 'cors'; // Default allows all origins
import 'dotenv/config';
import { addHit, connect } from '../model/connect.js';

connect();

const app = express();

// Default CORS configuration (allow all origins, no credentials)
app.use(cors()); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
