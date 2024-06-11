"use client";
import React, { useEffect, useState } from "react";
import ChatList from "./chat-list";
import SideHeader from "./side-header";
import { Conversation } from "@prisma/client";
import useDebounce from "@/hooks/useDebounce";

interface Props {
  conversations: Conversation[];
}

const Side = ({ conversations }: Props) => {
  const [search, setSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { debounced } = useDebounce(searchTerm);

  useEffect(() => {
    console.log(debounced);
  }, [debounced]);
  return (
    <div className="w-full flex flex-col md:w-96 border h-full overflow-hidden">
      <SideHeader setSearchTerm={setSearchTerm} setSearch={setSearch} />
      {search ? (
        <div className="p-5">Searching</div>
      ) : (
        <ChatList conversations={conversations} />
      )}
    </div>
  );
};

export default Side;
