import React from "react";
import { Outlet } from "react-router-dom";

const OpenChat = () => {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      <div className="chat chat-start">
        <div className="chat-bubble">Hey there! 👋</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble">Hi! How’s it going?</div>
      </div>
    </div>
  );
};

export default OpenChat;
