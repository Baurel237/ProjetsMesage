import React, { useRef, useEffect } from "react";
import ChatHeader from "../Header/ChatHeader";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";

export default function ChatWindow({ chat, messages = [], onSend }) {
  const containerRef = useRef(null);
  const endRef = useRef(null);

  // Scroll automatique à chaque nouveau message
  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Scroll automatique si la fenêtre change de taille (utile pour clavier mobile)
  useEffect(() => {
    const handleResize = () => {
      if (endRef.current) {
        endRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col h-[100vh]">
      <div className="bg-[#06202a] border-b border-slate-700">
        <ChatHeader user={{ name: chat.title, status: chat.status, photo: chat.avatar }} />
      </div>

      <div
        ref={containerRef}
        className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-[#081524] to-[#061322]"
      >
        {messages.map((m) => (
          <MessageBubble key={m.id} msg={m} />
        ))}
        <div ref={endRef} />
      </div>

      <div className="border-t border-slate-700 bg-[#071a24]">
        <MessageInput onSend={onSend} />
      </div>
    </div>
  );
}
