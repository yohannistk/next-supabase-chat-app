import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu } from "lucide-react";
import React from "react";

const ChatHeader = () => {
  return (
    <div className="p-2 border-b flex gap-2">
      <Button size={"icon"} variant={"outline"}>
        <Menu />
      </Button>
      <div className="flex-1">
        <form>
          <Input placeholder="Type Something..." />
        </form>
      </div>
    </div>
  );
};

export default ChatHeader;
