"use client";
import { cn } from "@/lib/utils";
import React from "react";

const MessageList = () => {
  const generateMessages = () => {
    return new Array(20).fill("").map((item, index) => {
      const even = index % 2 == 0;
      return (
        <div
          key={index}
          className={cn("grid place-self-end", {
            "place-self-start": even,
            "place-self-end": !even,
          })}
        >
          <div className="w-max grid">
            <div className="px-3.5 py-2 bg-gray-100 rounded justify-start items-center gap-3 inline-flex">
              <h5 className="text-gray-900 text-sm font-normal leading-snug">
                Guts, I need a review of work. Are you ready?
              </h5>
            </div>
            <div
              className={cn("items-center inline-flex mb-2.5", {
                "justify-end": !even,
                "justify-start": even,
              })}
            >
              <h6 className="text-gray-500 text-xs font-normal leading-4 py-1">
                05:14 PM
              </h6>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="flex-1 p-5 overflow-y-auto">
      <div className="max-w-[700px] mx-auto flex flex-col">
        {generateMessages()}
        {/* <div className="grid place-self-end">
          <div className="w-max grid">
            <div className="px-3.5 py-2 bg-gray-100 rounded justify-start items-center gap-3 inline-flex">
              <h5 className="text-gray-900 text-sm font-normal leading-snug">
                Guts, I need a review of work. Are you ready?
              </h5>
            </div>
            <div className="justify-start items-center inline-flex mb-2.5">
              <h6 className="text-gray-500 text-xs font-normal leading-4 py-1">
                05:14 PM
              </h6>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MessageList;
