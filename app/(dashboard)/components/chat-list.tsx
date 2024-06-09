import React from "react";
import Chat from "./chat";
import { Conversation } from "@prisma/client";
interface Props {
  conversations: Conversation[];
}
const ChatList = ({ conversations }: Props) => {
  return (
    <div className="p-2 hover: overflow-y-auto space-y-3">
      {conversations.map((conversation, index) => {
        return <Chat conversation={conversation} key={index} />;
      })}
    </div>
  );
};

export default ChatList;
