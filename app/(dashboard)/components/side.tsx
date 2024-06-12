"use client";
import React, { useEffect, useState } from "react";
import ChatList from "./chat-list";
import SideHeader from "./side-header";
import { Conversation, User } from "@prisma/client";
import useDebounce from "@/hooks/useDebounce";
import axios from "axios";
interface Props {
  conversations: Conversation[];
}

const Side = ({ conversations }: Props) => {
  const [search, setSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { debounced } = useDebounce(searchTerm);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchData, setSearchData] = useState<User[]>([]);
  useEffect(() => {
    (async () => {
      if (search == true) {
        setSearchData([]);
        setSearchLoading(false);
        try {
          setSearchLoading(true);
          const res = await axios.post("/api/user", { userName: debounced });
          console.log("res.data", res.data);
        } catch (e) {
          console.log(e);
        } finally {
          setSearchLoading(false);
        }
      }
    })();
  }, [debounced]);
  return (
    <div className="w-full flex flex-col md:w-96 border h-full overflow-hidden">
      <SideHeader setSearchTerm={setSearchTerm} setSearch={setSearch} />
      {search ? (
        <div className="p-5">{searchLoading && <>Loading...</>}</div>
      ) : (
        <ChatList conversations={conversations} />
      )}
    </div>
  );
};

export default Side;
