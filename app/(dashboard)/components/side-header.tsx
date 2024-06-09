"use client";
import { Input } from "@/components/ui/input";
import { UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import React from "react";

const SideHeader = () => {
  return (
    <div className="p-1.5 border-b flex gap-2">
      <div className="w-8 flex items-center">
        <UserButton />
      </div>
      <form className="flex flex-1">
        <div className="w-full  relative rounded-full border overflow-hidden">
          <Search
            size={20}
            className="absolute text-muted-foreground top-1/2 -translate-y-1/2 left-3"
          />
          <Input
            placeholder="Search"
            className="w-full h-full pl-10 border-none bg-transparent focus-visible:ring-0 focus:outline-0"
          />
        </div>
      </form>
    </div>
  );
};

export default SideHeader;
