import React from "react";
import ChatDetailHeader from "./components/chat-detail-header";
import MessageList from "./components/message-list";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

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
      <div className="border-t p-2">
        <form className="flex gap-2 max-w-[700px] mx-auto">
          <Input />
          <Button
            className="rounded-full w-12 h-12 p-2"
            size={"icon"}
            variant={"ghost"}
          >
            <Send className="text-muted-foreground" size={24} />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatDetail;
