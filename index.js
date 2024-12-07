const express = require('express');
const dotenv = require('dotenv');

const app = express();

dotenv.config();


app.use(cors());

app.get('/', (req ,res) => {
   res.send('hello world !');    
})