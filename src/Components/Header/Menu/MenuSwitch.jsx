import React from "react";

export default function MenuSwitch({ label }) {
  return (
    <div className="flex items-center justify-between p-2 mt-2">
      <div className="text-sm">{label}</div>
      <input type="checkbox" className="toggle-checkbox" />
    </div>
  );
}
