import React, { useContext } from "react";
import AppContext from "../AppContext";

function Taskbar() {
  const { apps, openApps, launchApp, setStartMenuOpen } = useContext(AppContext);

  return (
    <div className="taskbar">
      <button
        style={{
          margin: '0 16px 0 10px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={() => setStartMenuOpen((v) => !v)}
        aria-label="Start menu"
      >
        <img
          src="https://img.icons8.com/color/48/000000/windows-11.png"
          alt="Start"
          width={34}
          height={34}
          style={{ borderRadius: 8 }}
        />
      </button>
      <div style={{ display: "flex", flex: 1, alignItems: "center" }}>
        {openApps.map((app) => (
          <button
            key={app.id}
            style={{
              margin: '0 6px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              outline: 'none'
            }}
            onClick={() => launchApp(app)}
            aria-label={app.name}
          >
            <img
              src={app.icon}
              alt={app.name}
              width={28}
              height={28}
              style={{ borderRadius: 6, background: '#fff' }}
            />
          </button>
        ))}
      </div>
      <div style={{ marginRight: 18, color: "#ddd", fontWeight: 400, fontSize: 16 }}>
        {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </div>
    </div>
  );
}

export default Taskbar;