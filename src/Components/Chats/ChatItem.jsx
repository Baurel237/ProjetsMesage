import React from "react";

export default function ChatItem({ chat, active, onSelect }) {
  return (
    <div
      onClick={onSelect}
      className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${
        active ? "bg-slate-700" : "hover:bg-slate-800"
      }`}
    >
      <img src={chat.avatar} alt={chat.title} className="object-cover w-12 h-12 rounded-full" />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold">{chat.title}</div>
          <div className="text-xs text-slate-400">{chat.time}</div>
        </div>
        <div className="text-xs truncate text-slate-400">{chat.lastMessage}</div>
      </div>
      {chat.unread > 0 && (
        <div className="px-2 py-1 ml-2 text-xs text-white bg-blue-500 rounded-full">
          {chat.unread}
        </div>
      )}
    </div>
  );
}
