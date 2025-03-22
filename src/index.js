// const express = require('express'); 
import express from 'express';
const app = express();
import cors from 'cors';
// const dotenv = require('dotenv');
import 'dotenv/config'
import { addHit , connect } from '../model/connect.js';

connect(); // Call the connect function to establish a connection to the MongoDB server
app.use(express.urlencoded({ extended: true })); // To parse the incoming requests with urlencoded payloads
app.use(express.json()); // To parse the incoming requests with JSON payloads
app.use(cors()); // To enable Cross-Origin Resource Sharing for all routes
app.post('/visit', async (req, res) => {
    try {
        const response = req.body; // Get the request body
        if (response) {
            console.log(response);
            await addHit(response); // Wait for the addHit function to complete
            res.sendStatus(200); // Send a 200 status code
        } else {
            res.sendStatus(400); // Send a 400 status code
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.get('/', (req, res) => {
    res.send('wrong portal');
});


app.listen(8080, () => {
    console.log('Server is running on port 8080');
});


console.log(process.env.MONGODB_USERNAME + " " + process.env.MONGO_DB_PASSWORD)
