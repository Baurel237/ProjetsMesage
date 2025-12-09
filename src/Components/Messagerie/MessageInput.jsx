import React, { useState } from "react";
import { Send } from "lucide-react";

export default function MessageInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSendText = () => {
    if (!text.trim()) return;

    const newMessage = {
      id: Date.now(),
      type: "text",
      text,
      sender: "me",
      time: Date.now(),
    };

    onSend(newMessage);
    setText("");
  };

  return (
    <div className="p-3 bg-[#112240] flex">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Écrire un message..."
        className="flex-1 px-3 py-2 text-white bg-gray-800 rounded-lg"
        onKeyDown={(e) => e.key === "Enter" && handleSendText()}
      />

      <button
        onClick={handleSendText}
        className="px-4 py-2 ml-2 text-white bg-blue-600 rounded"
      >
        <Send />
      </button>
    </div>
  );
}
