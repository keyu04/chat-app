import React from "react";

const ChatBox = () => {
  return (
    <div className="w-full bg-base-200 p-3 border-t border-base-300">
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Type a message..."
          className="input input-bordered w-full rounded-2xl"
        />
        <button className="btn btn-primary rounded-2xl">Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
