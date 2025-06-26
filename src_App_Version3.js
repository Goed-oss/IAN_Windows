import React from "react";
import Desktop from "./components/Desktop";
import Taskbar from "./components/Taskbar";
import StartMenu from "./components/StartMenu";
import { AppProvider } from "./AppContext";

function App() {
  return (
    <AppProvider>
      <Desktop />
      <Taskbar />
      <StartMenu />
    </AppProvider>
  );
}

export default App;