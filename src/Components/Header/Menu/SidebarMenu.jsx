import React from "react";
import MenuItem from "./MenuItem";
import MenuSwitch from "./MenuSwitch";

export default function SidebarMenu() {
  return (
    <div className="w-64 bg-[#0b1216] border border-slate-700 rounded-lg shadow-lg p-4 text-slate-200">
      <div className="flex items-center gap-3 mb-3">
        <img
          src="https://cdn-icons-png.flaticon.com/512/747/747545.png"
          alt="avatar"
          className="object-cover w-12 h-12 rounded-full"
        />
        <div>
          <div className="font-semibold">Bemmo Brenston</div>
          <div className="text-sm text-slate-400">Définir un statut emoji</div>
        </div>
      </div>

      <div className="mt-2 space-y-1">
        <MenuItem icon="👤" label="Mon profil" />
        <MenuItem icon="👥" label="Nouveau groupe" />
        <MenuItem icon="📇" label="Contacts" />
        <MenuItem icon="📞" label="Appels" />
      </div>

      <div className="pt-3 mt-4 border-t border-slate-700">
        <MenuItem icon="⚙️" label="Paramètres" />
        <MenuSwitch label="Mode nuit" />
      </div>
    </div>
  );
}
