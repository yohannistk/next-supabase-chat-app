"use client";

import React, { useState } from "react";
import ChatList from "./chat-list";
import SideHeader from "./side-header";
import { Conversation } from "@prisma/client";

interface Props {
  conversations: Conversation[];
}

type SideState = "list" | "search";

const Side = (props: Props) => {
  const [currentState, setCurrentState] = useState<SideState>("list");
  return (
    <div className="w-full flex flex-col md:w-96 border h-full overflow-hidden">
      <SideHeader />
      <ChatList conversations={props.conversations} />
    </div>
  );
};

export default Side;
