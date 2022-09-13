import React from "react";
import { Client, Lobby } from "boardgame.io/react";
import { Simulator } from "./Game";
import Arena from "./Client/ui/pages/arena/arena";
import "./Client/ui/styles/globals.css";
import "./Client/ui/styles/responsive.css";
import "./Client/ui/styles/animations.css";
import PageProvider from "Client/context/page";
import PageManager from "Client/ui/pages/page-manager";

const lobby = (
  <Lobby
    gameServer={`https://${window.location.hostname}:8000`}
    lobbyServer={`https://${window.location.hostname}:8000`}
    gameComponents={[{ game: Simulator, board: Arena }]}
  />
);

const App = () => {
  return (
    <PageProvider>
      <PageManager />
    </PageProvider>
  );
};

export default App;
