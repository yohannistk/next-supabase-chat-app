import { Conversation } from "@prisma/client";
import React from "react";

interface Props {
  conversations: Conversation[];
}

const ChatSearch = ({ conversations }: Props) => {
  return (
    <div>
      {conversations.map((conversation) => {
        return <div>{conversation.id}</div>;
      })}
    </div>
  );
};

export default ChatSearch;
