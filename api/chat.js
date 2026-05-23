import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export default async function handler(req, res){

if(req.method !== "POST"){
return res.status(405).json({
reply:"Method not allowed"
});
}

try{

const { message } = req.body;

const model = genAI.getGenerativeModel({
model:"gemini-1.5-flash"
});

const result = await model.generateContent(`
তুমি একটি cute Bangla AI girlfriend chatbot.
সবসময় sweet ভাবে reply দিবা.

User: ${message}
`);

const response = result.response.text();

res.status(200).json({
reply: response
});

}catch(err){

res.status(500).json({
reply:"AI error 😢"
});

}

}
