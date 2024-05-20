"use client";

import { Button } from "@/components/ui/button";
import { Paperclip, SendHorizonal } from "lucide-react";
import React, { useState } from "react";

const MessageForm = () => {
  const [message, setMessage] = useState("");
  return (
    <div className="py-3 bg-transparent">
      <form className="flex gap-2 border items-center p-1 rounded-full overflow-hidden shadow-2xl max-w-[700px] mx-auto">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-3 block flex-1 h-full focus-visible:border-none focus-visible:outline-none outline-none bg-transparent focus-visible:ring-0"
          placeholder="Message..."
        />
        {message.length > 0 ? (
          <Button className="rounded-full w-10 h-10 p-2" size={"icon"}>
            <SendHorizonal className="text-white" size={24} />
          </Button>
        ) : (
          <Button
            className="rounded-full w-12 h-12 p-2"
            size={"icon"}
            variant={"ghost"}
          >
            <Paperclip className="text-muted-foreground" size={24} />
          </Button>
        )}
      </form>
    </div>
  );
};

export default MessageForm;
