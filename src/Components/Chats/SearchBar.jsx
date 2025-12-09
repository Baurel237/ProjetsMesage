import React from "react";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="p-3 border-b border-slate-700">
      <div className="relative">
        <Search size={16} className="absolute left-3 top-3 text-slate-400" />
        <input
          className="w-full pl-10 pr-3 py-2 rounded-lg bg-[#0f2936] text-slate-200 placeholder:text-slate-500"
          placeholder="Rechercher des conversations"
        />
      </div>
    </div>
  );
}
