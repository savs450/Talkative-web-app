import React, { useEffect, useState } from "react";
import axios from "axios";


const ChatPage = () => {
    const [chats, setChats] = useState([])
  const fetchChats = async () => {
    let {data} = await axios.get("/api/chat");
    setChats(data)
    console.log(data)
  };
  useEffect(() => {
    fetchChats();
  }, []);
  return <div>
    {chats.map((chat,key) => 
        <div key={key}>{chat.chatName}</div>)}
  </div>;
};

export default ChatPage;
