const express = require("express");
const router= express.Router()

const { GoogleGenerativeAI } = require("@google/generative-ai");
const bodyParser = require("body-parser");
require("dotenv").config();
// const app = express();
router.use(express.json());
router.use(bodyParser.json());
    
    router.get('/', (req,res)=>{
        res.json({mssg:"Welcome to the Video Summarizer"})
    })
    
    const genAI = new GoogleGenerativeAI(process.env.API_KEY_FOR_SUMMARY);
    // const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-002"});
    // const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
    // const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-exp-0827"});
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest"});
    
    
    
    const generate = async(prompt) => {
        try{
            const result = await model.generateContent(prompt);
            console.log(result.response.text());
            return result.response.text();
        } catch(err){
            console.log(err);
        }
    }
    
    
    router.post('/ysummarize', async(req,res) => {
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
    
    module.exports = router;