const express = require('express');
const dotenv = require('dotenv');
require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const port = 7100;

// Replace with your API key
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

app.get('/story', async (req, res) => {
  const prompt = "Write a story about a magic backpack.";

  try {
    const result = await model.generateContent(prompt);
    const response = {
      story: result.response.text()
    };
    res.json(response);
  } catch (error) {
    console.error('Error generating content:', error);
    res.status(500).json({ error: 'An error occurred while generating the story.' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});