import React from "react";
import Chat from "./chat";
const ChatList = () => {
  return (
    <div className="p-2 hover: overflow-y-auto space-y-3">
      {new Array(20).fill("").map((chat, index) => {
        return <Chat key={index} />;
      })}
    </div>
  );
};

export default ChatList;
