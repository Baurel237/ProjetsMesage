import React from "react";

export default function MessageBubble({ msg }) {
  const isMe = msg.sender === "me";

  return (
    <div className={`flex ${isMe ? "justify-end" : "justify-start"} mb-2`}>
      <div
        className={`
          relative 
          p-3 
          rounded-2xl 
          max-w-[70%] 
          break-words 
          shadow-md
          ${isMe 
            ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-br-none"
            : "bg-gray-700 text-gray-100 rounded-bl-none"}
          transition-all duration-300
        `}
      >
        <p className="text-sm">{msg.text}</p>
        <p className="mt-1 text-xs text-right opacity-70">
          {new Date(msg.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>

        <div
        />
      </div>
    </div>
  );
}
