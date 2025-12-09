import React from "react";
import { Search, Phone, Video } from "lucide-react";

export default function ChatHeader({ user }) {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <div className="flex items-center gap-3">
        <img src={user.photo} alt={user.name} className="object-cover w-10 h-10 rounded-full" />
        <div>
          <div className="font-semibold">{user.name}</div>
          <div className="text-xs text-slate-400">{user.status}</div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        
        <Search size={18} className="cursor-pointer text-slate-300 hover:scale-105" />
        <Phone size={18} className="cursor-pointer text-slate-300 hover:scale-105" />
        <Video size={18} className="cursor-pointer text-slate-300 hover:scale-105" />
      </div>
    </div>
  );
}
