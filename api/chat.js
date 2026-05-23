export default async function handler(req, res) {

if(req.method !== 'POST'){
return res.status(405).json({
reply: "Method Not Allowed"
});
}

const { message } = req.body;

let reply = "";

const msg = message.toLowerCase();

if(msg.includes("hello")){
reply = "Hello sona 😘";
}
else if(msg.includes("gay")){
reply = "😂 Toi gaey 😏";
}
else if(msg.includes("love")){
reply = "i love you too sona 🤗";
}
else if(msg.includes("hi")){
reply = "Hey baby 😘";
}
else{
reply = "Hmm.cini ami 🙂";
}

res.status(200).json({
reply
});

}
