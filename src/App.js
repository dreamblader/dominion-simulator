//TODO default doc code -- change this
import { Client } from 'boardgame.io/react';
//import { SocketIO } from 'boardgame.io/multiplayer'
import { Simulator } from './Game';

/*
const TicTacToeClient = Client({
  game: TicTacToe,
  //board: TicTacToeBoard,
  multiplayer: SocketIO({ server: 'localhost:8000' }),
});
*/

const App = Client({ game: Simulator }); //<****Client> in React

export default App;