import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Conversation } from "@prisma/client";
import Link from "next/link";
import React from "react";

interface Props {
  conversation: Conversation;
}

const Chat = ({ conversation }: Props) => {
  return (
    <Link className="block" href={`/chat/${conversation.id}`}>
      <div className="w-full flex gap-2 hover:bg-gray-100 transition rounded-md border-b p-2">
        <Avatar>
          <AvatarImage
            className="bg-gray-300"
            src={"https://avatar.iran.liara.run/public"}
          />
          <AvatarFallback />
        </Avatar>
        <div className="flex-1 overflow-hidden">
          <div className="flex justify-between items-center gap-2">
            <h2 className="text-md font-semibold">Chat Title</h2>
            <span className="text-xs text-muted-foreground">30.22</span>
          </div>
          <div className="flex justify-between items-center gap-2">
            <p className="text-muted-foreground w-full truncate text-xs">
              last message placeholder last message placeholder last message
              placeholder
            </p>
            <Badge className="bg-green-600 text-white">10</Badge>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Chat;
