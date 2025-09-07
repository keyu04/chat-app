import React from "react";
import NavBar from "./navBar";
import OpenChat from "./OpenChat";
import ChatBox from "./ChatBox";
import { Outlet } from "react-router-dom";

const Drawer = () => {
  return (
    <div>
      <div className="drawer">
        <input id="chat-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col min-h-screen">
          <NavBar />

          <OpenChat />

          <ChatBox />
        </div>

        <div className="drawer-side">
          <label htmlFor="chat-drawer" className="drawer-overlay"></label>
          <div className="w-64 min-h-full bg-base-200 flex flex-col">
            <div className="p-4 border-b border-base-300">
              <h2 className="text-lg font-bold text-center">Chat</h2>
            </div>

            <ul className="menu p-4 flex-1 text-base-content">
              <li>
                <a>🏠 Home</a>
              </li>
              <li>
                <a>📂 Portfolio</a>
              </li>
              <li>
                <a>ℹ️ About</a>
              </li>
              <li>
                <a>⚙️ Settings</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
