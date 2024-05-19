import React from "react";
import Chat from "./chat";
import { ScrollArea } from "@/components/ui/scroll-area";

const ChatList = () => {
  return (
    <div className="p-2 overflow-y-auto space-y-2">
      {new Array(20).fill("").map((chat) => {
        return <Chat />;
      })}
    </div>
  );
};

export default ChatList;
