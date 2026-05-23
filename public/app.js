async function sendMessage(){

const input = document.getElementById("msg");

const message = input.value;

if(message.trim() === "") return;

const chatBox = document.getElementById("chatBox");

chatBox.innerHTML += `
<div class="user-msg">
${message}
<span class="seen">Seen ✓✓</span>
</div>
`;

input.value = "";

chatBox.innerHTML += `
<div class="typing" id="typing">
BaBy is typing...
</div>
`;

chatBox.scrollTop = chatBox.scrollHeight;

const response = await fetch('/api/chat',{

method:'POST',

headers:{
'Content-Type':'application/json'
},

body: JSON.stringify({
message
})

});

const data = await response.json();

document.getElementById("typing").remove();

chatBox.innerHTML += `
<div class="bot-msg">
${data.reply}
</div>
`;

chatBox.scrollTop = chatBox.scrollHeight;

}
