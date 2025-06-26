import React, { useContext } from "react";
import AppContext from "../AppContext";
import AppIcon from "./AppIcon";

function StartMenu() {
  const { startMenuOpen, apps, launchApp } = useContext(AppContext);

  if (!startMenuOpen) return null;

  return (
    <div className="startmenu">
      <div style={{ fontWeight: 600, fontSize: 18, color: "#fff", marginBottom: 16 }}>
        Start
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {apps.map((app) => (
          <AppIcon key={app.id} app={app} onClick={() => launchApp(app)} />
        ))}
      </div>
    </div>
  );
}

export default StartMenu;