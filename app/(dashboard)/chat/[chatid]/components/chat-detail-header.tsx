import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MoreVerticalIcon, Phone, PhoneCall } from "lucide-react";
import React from "react";

const ChatDetailHeader = () => {
  return (
    <div className="py-1.5 px-4 flex justify-between border-b bg-white">
      <div className="flex gap-2">
        <div className="flex gap-1">
          <Avatar>
            <AvatarImage
              className="bg-gray-300"
              src="https://avatar.iran.liara.run/public"
            />
            <AvatarFallback />
          </Avatar>
        </div>
        <div className="flex flex-col">
          <h3 className="font-extrabold text-md">Username</h3>
          <span className="text-xs text-green-400">Active</span>
        </div>
      </div>
      <div className="flex gap-2">
        <Button
          size={"icon"}
          className="rounded-full text-muted-foreground"
          variant={"ghost"}
        >
          <Phone />
        </Button>
        <Button
          size={"icon"}
          className="rounded-full text-muted-foreground"
          variant={"ghost"}
        >
          <MoreVerticalIcon />
        </Button>
      </div>
    </div>
  );
};

export default ChatDetailHeader;
