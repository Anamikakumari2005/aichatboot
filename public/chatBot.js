// import { object } from "motion/react-client";

// import { color } from "motion";
// import { object } from "motion/react-client";


(function () {
  const api_url = "http://localhost:3000/api/chat"

  const scriptTag = document.currentScript;
  const ownerid = scriptTag.getAttribute("data-owner-id")
  if (!ownerid) {
    console.log("owner id not found");
    return

  }
  const button = document.createElement("div")
  button.innerHTML = "💬"

  Object.assign(button.style, {
    position: "fixed",
    bottom: "24px",
    right: "24px",
    width: "56px",
    height: "56px",
    background: "black",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    cursor: "pointer"
  })

  document.body.appendChild(button)

  const box = document.createElement("div")
  Object.assign(box.style, {
    position: "fixed",
    bottom: "100px",
    right: "24px",
    width: "300px",
    height: "400px",
    background: "#0f172a",   // dark black-blue
    color: "white",          // text visible rahe
    border: "1px solid #1e293b",
    borderRadius: "12px",    // rounded corners
    boxShadow: "0 8px 25px rgba(0,0,0,0.5)",
    padding: "10px",
    overflow: "hidden"
  })

  box.innerHTML = `
<div id="chat-container" style="
  display: flex;
  flex-direction: column;
  height: 100%;
">

  <!-- Header -->
  <div id="chat-header" style="
    display:flex;
    justify-content:space-between;
    padding:10px;
    border-bottom:1px solid #1e293b;
    font-weight:bold;
  ">
    <span id="chat-title">Chat with us</span>
    <span id="chat-close" style="cursor:pointer;">❌</span>
  </div>

  <!-- Messages -->
  <div id="chat-messages" style="
    flex:1;
    padding:10px;
    overflow-y:auto;
    background:#1e293b;
    display:flex;
    flex-direction:column;
    gap:10px;
  ">
  </div>

  <!-- Input Area -->
  <div id="chat-input-area" style="
    display:flex;
    border-top:1px solid #1e293b;
  ">
    <input 
      id="chat-input"
      type="text"
      placeholder="Type your message"
      style="
        flex:1;
        padding:8px;
        border:none;
        outline:none;
        background:#020617;
        color:white;
      "
    />
    <button 
      id="chat-send"
      style="
        background:#2563eb;
        color:white;
        border:none;
        padding:8px 12px;
        cursor:pointer;
      "
    >
      Send
    </button>
  </div>

</div>
`

  document.body.appendChild(box)

  button.onclick = () => {
    box.style.display = box.style.display === "none" ? "flex" : "none"
  }

  document.querySelector("#chat-close").onclick=()=>{
    box.style.display="none"
  }

  const input = document.querySelector("#chat-input")
  const sendBtn = document.querySelector("#chat-send")
  const messageArea= document.querySelector("#chat-messages")

  function  addMessage(text,from) {
    const bubble=document.createElement("div")
    bubble.innerText=text
   Object.assign(bubble.style, {
  maxWidth: "78%",
  padding: "8px 12px",
  borderRadius: "14px",
  fontSize: "13px",
  lineHeight: "1.4",
  marginBottom: "8px",

  alignSelf: from === "user" ? "flex-end" : "flex-start",
  background: from === "user" ? "#000" : "#e5e7eb",
  color: from === "user" ? "#fff" : "#111",

  borderTopRightRadius: from === "user" ? "4px" : "14px",
  borderTopLeftRadius: from === "user" ? "14px" : "4px"
})


messageArea.appendChild(bubble)
messageArea.scrollTop=messageArea.scrollHeight
  }

  sendBtn.onclick= async()=>{
    const text =input.value.trim()
    if(!text){
      return
    }
    addMessage(text,"user")
    input.value=""

    const typing=document.createElement("div")
    typing.innerHTML="Typing..."
    Object.assign(typing.style,{
      fontSize:"12px",
      color:"#6b7280",
      marginBottom:"8px",
      alignSelf:"flex-start",
    })
    messageArea.appendChild(typing)
    messageArea.scrollTop=messageArea.scrollHeight

    try {
      const response=await fetch(api_url,{
        method:"POST",
        headers:{"content-Type":"application/json"},
        body:JSON.stringify({
          ownerid,message:text
        })
      })

      const data=await response.json()
      messageArea.removeChild(typing)
      addMessage(data || "something went wrong","ai")
    } catch (error) {
      console.log(error);
      
      messageArea.removeChild(typing)
      addMessage(data || "something went wrong","ai")
    }
  }

})()