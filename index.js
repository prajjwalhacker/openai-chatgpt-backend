const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const openai = require('openai');

const app = express();

dotenv.config();


app.use(cors({
}));

app.use(express.json());


const configuration = new openai.Configuration(
  {
    apiKey: process.env.OPENAPI_API_KEY
  }
)

app.get('/', async (req ,res) => {
   res.send('hello world !');    
})

app.post('/', async(req ,res) => {
  try {
      const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: 'hello',
        temperature: 0,
        max_tokens: 1000,
        top_p: 1,
        frequency_penalty: 0.5,
        presense_penalty: 0
      })
      res.status(200).send({
        bot: response.data.choices[0].text
      });
  }
  catch (err) {
    console.log("err");
    console.log(err);
    res.status(500).send("Something went wrong");
  }
})

app.listen(8000, () => {
  console.log("port is listening on port 8000");
})