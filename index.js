const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();

dotenv.config();


app.use(cors({
}));

app.get('/', (req ,res) => {
   res.send('hello world !');    
})

app.listen(8000, () => {
  console.log("port is listening on port 8000");
})