import React, { createContext, useState } from "react";
import { apps } from "./apps/AppList";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [openApps, setOpenApps] = useState([]);
  const [startMenuOpen, setStartMenuOpen] = useState(false);

  const launchApp = (app) => {
    setOpenApps((appsPrev) =>
      appsPrev.find((a) => a.id === app.id) ? appsPrev : [...appsPrev, app]
    );
    setStartMenuOpen(false);
  };

  const closeApp = (id) => {
    setOpenApps((appsPrev) => appsPrev.filter((a) => a.id !== id));
  };

  return (
    <AppContext.Provider
      value={{
        openApps,
        launchApp,
        closeApp,
        startMenuOpen,
        setStartMenuOpen,
        apps,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;