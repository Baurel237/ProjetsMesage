import React from "react";
import SearchBar from "./SearchBar";
import ChatItem from "./ChatItem";

export default function ChatList({ chats = [], activeChat, onSelectChat }) {
  return (
    <div className="h-full flex flex-col bg-[#071826] w-full">
      <SearchBar />
      <div className="px-3 py-3 space-y-2 overflow-y-auto">
        {chats.map((c) => (
          <ChatItem
            key={c.id}
            chat={c}
            active={activeChat?.id === c.id}
            onSelect={() => onSelectChat(c)}
          />
        ))}
      </div>
    </div>
  );
}
