const axios = require('axios');



import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Tell me about Computer Science Engeneering";

const result = await model.generateContent(prompt);
console.log(result.response.text());






// // Summarize Video Description using Gemini API
// const getVideoSummary = async (description) => {
//   const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
//   const geminiApiUrl = `https://gemini.googleapis.com/v1/summarize`;

//   const response = await axios.post(
//     geminiApiUrl,
//     {
//       prompt: `Summarize this YouTube video description: ${description}`,
//       max_tokens: 150,
//     },
//     {
//       headers: {
//         Authorization: `Bearer ${GEMINI_API_KEY}`,
//         'Content-Type': 'application/json',
//       },
//     }
//   );

//   return response.data.summary.trim();
// };

// module.exports = { getVideoSummary };