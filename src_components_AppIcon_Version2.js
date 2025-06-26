import React from "react";

function AppIcon({ app, onClick }) {
  return (
    <div className="appicon" onClick={onClick} title={app.name}>
      <img src={app.icon} alt={app.name} />
      <span>{app.name}</span>
    </div>
  );
}

export default AppIcon;