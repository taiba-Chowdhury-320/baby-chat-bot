export default async function handler(req, res){

if(req.method !== 'POST'){
return res.status(405).json({
reply:"Method not allowed"
});
}

const { message } = req.body;

const msg = message.toLowerCase();

let reply = "";

if(msg.includes("hi")){
reply = "Hello sona 😘";
}

else if(msg.includes("hello")){
reply = "Hii baby 😍";
}

else if(msg.includes("love")){
reply = "i love you too sona 🤗";
}

else if(msg.includes("gay")){
reply = "😂 Toi gaey 😏";
}

else if(msg.includes("your mom")){
reply = "ammu ke niye dustami korba na 😒";
}

else if(msg.includes("miss you")){
reply = "Aww আমিও তোমাকে miss করি 🥺❤️";
}

else{
reply = "Hmm.cini ami 🙂";
}

res.status(200).json({
reply
});

}
