//TODO default doc code -- change this
import { Client } from "boardgame.io/react";
//import { SocketIO } from 'boardgame.io/multiplayer'
import { Simulator } from "./Game";
import Arena from "./ui/pages/arena";
import "./ui/styles/globals.css";

const SimulatorClient = Client({
  game: Simulator,
  board: Arena,
  //debug: false,
  //multiplayer: SocketIO({ server: 'localhost:8000' }),
});

const App = SimulatorClient; //<****Client> in React

export default App;
