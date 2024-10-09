// const { GoogleGenerativeAI } = require("@google/generative-ai");
// const bodyParser = require("body-parser");
// require("dotenv").config();
// const express = require("express");
// const app = express();
// app.use(express.json());
// app.use(bodyParser.json());

// app.get('/', (req,res) => {
//     res.send("Hello Gemini");
// })

// const genAI = new GoogleGenerativeAI(process.env.API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

// const generate = async(prompt) => {
//     try{
//         const result = await model.generateContent(prompt);
//         console.log(result.response.text());
//         return result.response.text();
//     } catch(err){
//         console.log(err);
//     }
// }

// app.get('/api/content', async(req,res) => {
//     try{
//         const data = req.body.videoUrl;
//         const result = await generate(data);
//         res.send({
//             "result": result
//         })
//     } catch {
//         res.send("error: " + err)
//     }
// })

// app.listen(3000, () =>{
//     console.log('Server is up and running in port 3000')
// })



const { GoogleGenerativeAI } = require("@google/generative-ai");
const bodyParser = require("body-parser");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// app.get('/', (req,res) => {
//     res.json("Hello Gemini");
// })

app.get('/', (req,res)=>{
    res.json({mssg:"Welcome to the server"})
})

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-002"});

const generate = async(prompt) => {
    try{
        const result = await model.generateContent(prompt);
        console.log(result.response.text());
        return result.response.text();
    } catch(err){
        console.log(err);
    }
}


app.post('/vel', async(req,res) => {
    try{
        const data = req.body.question
        const result = await generate(data);
        res.json({
            "result": result
        })
    } catch {
        res.send("error: " + err)
    }
})

app.listen(3000, () =>{
    console.log('Server is up and running in port 3000')
})