import React from "react";

export default function MenuItem({ icon, label }) {
  return (
    <div className="flex items-center gap-3 p-2 rounded-md cursor-pointer hover:bg-slate-800">
      <div className="text-lg">{icon}</div>
      <div className="text-sm">{label}</div>
    </div>
  );
}
