import React, { useState } from "react";
import Sidebar from "./Components/Header/Siderbar";
import ChatList from "./Components/Chats/ChatList";
import ChatWindow from "./Components/Messagerie/ChatWindow";
import { categories } from "./Components/Main/data";
import { chats as initialChats } from "./Components/Main/chat";

export default function App() {
  // Chats
  const [chats, setChats] = useState(initialChats);

  // Chat actif
  const [activeChat, setActiveChat] = useState(chats[0] || null);

  // Messages par chat id
  const initialMessages = chats.reduce((acc, c) => {
    acc[c.id] = c.messages || [];
    return acc;
  }, {});

  const [messagesByChat, setMessagesByChat] = useState(initialMessages);

  // Catégorie active
  const [activeCategory, setActiveCategory] = useState(null);

  // Sélection de chat
  const handleSelectChat = (chat) => {
    setActiveChat(chat);
    if (!messagesByChat[chat.id]) {
      setMessagesByChat((prev) => ({ ...prev, [chat.id]: [] }));
    }
  };

  // Envoi de message
  const handleSend = (newMessage) => {
    if (!activeChat) return;
    setMessagesByChat((prev) => ({
      ...prev,
      [activeChat.id]: [...(prev[activeChat.id] || []), newMessage],
    }));
  };

  return (
    <div className="flex h-screen w-full bg-[#071226] text-white">
      {/* Sidebar */}
      <div className="hidden md:flex md:basis-[8%] bg-[#061827]">
        <Sidebar categories={categories} onSelectCategory={setActiveCategory} />
      </div>

      {/* Chat list */}
      <div className="hidden sm:flex sm:basis-[30%] border-r border-slate-700">
        <ChatList
          chats={activeCategory ? chats.filter(c => c.categoryId === activeCategory.id) : chats}
          activeChat={activeChat}
          onSelectChat={handleSelectChat}
        />
      </div>

      {/* Chat window */}
      <div className="flex-1">
        {activeChat ? (
          <ChatWindow
            chat={activeChat}
            messages={messagesByChat[activeChat.id] || []}
            onSend={handleSend}
          />
        ) : (
          <div className="flex items-center justify-center h-full text-slate-300">
            Sélectionne une conversation
          </div>
        )}
      </div>
    </div>
  );
}
