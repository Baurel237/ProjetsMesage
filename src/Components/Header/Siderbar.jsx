import React, { useState, useRef, useEffect } from "react";
import { Menu, SlidersHorizontal } from "lucide-react";
import SidebarMenu from "./Menu/SidebarMenu";

const Sidebar = ({ categories, onSelectCategory }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  // close when click outside
  useEffect(() => {
    const onDoc = (e) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div className="relative w-full h-full p-3">
      <button
        onClick={() => setOpen((s) => !s)}
        className="flex items-center justify-center w-full p-2 rounded-lg hover:bg-slate-800"
      >
        <Menu size={28} className="text-slate-300" />
      </button>

      <div className="flex flex-col items-center mt-4 space-y-4">
        {categories.map((c) => { // ← utiliser la prop categories
          const Icon = c.icon;
          return (
            <button
              key={c.id}
              className="flex flex-col items-center"
              onClick={() => onSelectCategory(c)} // notifier App
            >
              <Icon size={24} className="text-slate-300" />
              <span className="mt-1 text-xs text-slate-400">{c.name}</span>
            </button>
          );
        })}
      </div>

      <div className="absolute bottom-4 left-3 right-3">
        <button className="flex items-center justify-center w-full gap-2 p-2 rounded-lg bg-slate-800">
          <SlidersHorizontal size={18} />
          <span className="text-sm">Modifier</span>
        </button>
      </div>

      {/* floating menu */}
      {open && (
        <div ref={menuRef} className="absolute z-50 left-20 top-12">
          <SidebarMenu />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
