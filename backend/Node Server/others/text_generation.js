// const { GoogleGenerativeAI } = require('@google/generative-ai');
// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// require('dotenv').config();
// const app = express();

// app.use(cors);
// app.use(express.json());
// app.use(bodyParser.json());

// app.get('/t', async (req, res) => {
//  res.send("Hello");
// })

// app.get('/gcontent', async (req, res) => {
//   res.send(result.response.text);
//  })

// const genAI = new GoogleGenerativeAI(process.env.API_KEY);
// const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

// const prompt = "Tell me about Obama";

// const generate = async(prompt) => {
//   try{
//     const result = await model.generateContent(prompt);
//     console.log(result.response.text());
//     return result.response.text();
//   } catch(err) {
//     console.log(err);
//   }
// }

// // Main
// // app.get('/api/gcontent', async (req, res) => {
// //   try {
// //     const data = req.body.question
// //     const result = await generate(data);
// //     res.send({
// //       "result": result
// //     })
// //   } catch(err) {
// //     res.send("error: " + err)
// //   }
// // })

// // app.get('/content', async (req, res) => {
// //   try {
// //     const data = req.body.question
// //     const result = await generate(data);
// //     res.send({ "result": result })
// //   } catch (err) {
// //     res.send("error: " + err);
// //   }
// // });




// // app.get('/getcontent', async (req, res) => {
// //   try {
// //     const data = "Where is Chennai";
// //     const result = await generate(data);
// //     res.send(data)
// //   } catch(err) {
// //     res.send("error: " + err)
// //   }
// // })

// // app.post('/api/contents', async (req, res) => {
// //   try {
// //     const data = "Where is Chennai";
// //     const result = await generate(data);
// //     res.send(data)
// //   } catch(err) {
// //     res.send("error: " + err)
// //   }
// // })


// const port = 6000;
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });