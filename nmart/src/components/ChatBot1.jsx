import { ChatDotsFill } from "react-bootstrap-icons";
import ChatBot from "react-simple-chatbot";
import "../css/ChatBot.css";

const Chatbot1 = () => {
  const steps = [
    {
      id: "Greet",
      message: "Hello, Welcome to NMart",
      trigger: "Ask Name",
    },
    {
      id: "Ask Name",
      message: "Please enter your name",
      trigger: "waiting1",
    },
    {
      id: "waiting1",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message: "Hi {previousValue}, Please select your issue",
      trigger: "issues",
    },
    {
      id: "issues",
      options: [
        {
          value: "Orders",
          label: "Orders",
          trigger: "waiting2",
        },
        {
          value: "Returns",
          label: "Returns",
          trigger: "waiting2",
        },
        {
          value: "Refund",
          label: "Refund",
          trigger: "waiting2",
        },
      ],
    },
    {
      id: "waiting2",
      message: "Please enter your order number",
      trigger: "waiting3",
    },
    {
      id: "waiting3",
      user: true,
      trigger: "End Message",
    },
    {
      id: "End Message",
      message:
        "Thanks for letting us know, Our customer service agent will contact you shortly. ",
      end: true,
    },
  ];

  const toggleChatBot = () => {
    let x = document.getElementsByClassName("chatBot");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };

  return (
    <>
      <div className="chatBot-container">
        <ChatDotsFill className="chat-icon" onClick="toggleChatBot()" />
        <ChatBot steps={steps} className="chatBot" />
      </div>
    </>
  );
};

export default Chatbot1;
