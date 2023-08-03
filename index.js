const express = require('express');
const axios = require('axios');
require("dotenv").config()
const app = express();
const port = 3000;
const {createCompletionChatGTP} = require("./chatgptapi")

const chatGptApiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';



// API endpoint to generate Shayari
app.get('/shayari', async (req, res) => {
  const keyword = req.query.keyword;
  
  if (!keyword) {
    return res.status(400).json({ error: 'Please provide a keyword.' });
  }

  try {
    const { data } = await createCompletionChatGTP({
        message: `Write shayari two long for ${keyword} and short one sentence 3 shayari's `,
      });

      let contentArray = data.choices[0]?.text.trim()
    console.log(contentArray)
    return res.json({ contentArray});
  } catch (error) {
    return res.status(500).json({ error: 'Error generating Shayari.',err:error.message});
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
