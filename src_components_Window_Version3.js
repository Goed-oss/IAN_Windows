import React, { useContext } from "react";
import AppContext from "../AppContext";

function Window({ app, zIndex }) {
  const { closeApp } = useContext(AppContext);

  return (
    <div
      className="window"
      style={{
        left: 100 + Math.floor(Math.random() * 120),
        top: 80 + Math.floor(Math.random() * 60),
        width: 720,
        height: 450,
        zIndex: zIndex || 101
      }}
    >
      <div className="window-header">
        <span style={{ display: "flex", alignItems: "center" }}>
          <img src={app.icon} alt={app.name} width={22} style={{ marginRight: 8, borderRadius: 5 }} />
          {app.name}
        </span>
        <button
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            fontWeight: "bold",
            fontSize: 18,
            cursor: "pointer"
          }}
          aria-label="Close"
          onClick={() => closeApp(app.id)}
        >
          ×
        </button>
      </div>
      <div className="window-content">
        {app.embed ? (
          <iframe
            src={app.url}
            title={app.name}
            style={{ width: "100%", height: "100%", border: "none" }}
          />
        ) : (
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%" }}>
            <a
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#0078d4",
                textDecoration: "underline",
                fontSize: 20,
                fontWeight: 500
              }}
            >
              Open {app.name} <span style={{ fontSize: 17 }}>↗</span>
            </a>
            <p style={{ color: "#555", marginTop: 16, fontSize: 15 }}>
              {app.name} will open in a new tab.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Window;