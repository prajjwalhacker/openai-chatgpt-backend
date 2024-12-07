const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const OpenAI = require('openai');

const app = express();

dotenv.config();


app.use(cors({
}));

app.use(express.json());


const configuration = new OpenAI(
  {
    apiKey: process.env.OPENAPI_API_KEY
  }
)

app.get('/', async (req ,res) => {
   res.send('hello world !');    
})

app.post('/', async(req ,res) => {
  try {
      const response = await configuration.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: 'hello' }],
        max_tokens: 100,
        temperature: 0.7,
      });
      console.log("Response");
      console.log(response.choices[0].message);
      res.status(200).send({
        bot: response.choices[0].message.content
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