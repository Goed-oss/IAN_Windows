import React, { useContext } from "react";
import AppContext from "../AppContext";
import Window from "./Window";

function Desktop() {
  const { openApps } = useContext(AppContext);

  return (
    <div className="desktop">
      {openApps.map((app, idx) => (
        <Window key={app.id} app={app} zIndex={100 + idx} />
      ))}
    </div>
  );
}

export default Desktop;