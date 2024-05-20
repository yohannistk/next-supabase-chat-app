import React from "react";
import ChatDetailHeader from "./components/chat-detail-header";
import MessageList from "./components/message-list";
import MessageForm from "./components/message-form";

interface Props {
  params: {
    chatid: string;
  };
}

const ChatDetail = (props: Props) => {
  return (
    <div className="flex flex-col h-full w-full">
      <ChatDetailHeader />
      <MessageList />
      <MessageForm />
    </div>
  );
};

export default ChatDetail;
