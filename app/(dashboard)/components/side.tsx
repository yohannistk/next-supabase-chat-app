import React from "react";
import ChatList from "./chat-list";
import SideHeader from "./side-header";

const Side = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props}>
      <SideHeader />
      <ChatList />
    </div>
  );
};

export default Side;
