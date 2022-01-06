import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import _ from "lodash";
import cookie from "react-cookies"
// Boardgame.io
import { Client } from "boardgame.io/react";
import { SocketIO } from "boardgame.io/multiplayer";

// Utils
import api from 'service/api';
import K from "utils/constants";
import Simulator from "Game.js";

import Arena from "ui/pages/arena";

// Styles
import classes from "./Arena.module.css";

const SimulatorClient = Client({
  game: Simulator,
  board: Arena,
  multiplayer: SocketIO({ server: "localhost:8000" }),
  debug: false
});

/**
 * This is the arena
 * @param {*} props 
 * @returns 
 */
const ArenaPage = () => {
  const [control, setControl] = useState({
    loading: false,
    valid: undefined,
  });
  const [matchConfig, setMatchConfig] = useState(null);
  // TODO when user enter using matchID as param they can join or watch the match
  // const { matchID } = useParams();


  useEffect(() => {
    // Load cookies from browser to set the initial state of player info
    const cookieState = cookie.load('lobbyState');
    if (!_.isEmpty(cookieState)) {
      setControl(prev => ({ ...prev, loading: true }));
      console.log("decKID: ", cookieState.player.deckID);
      api.get(`/games/${K.GAME_NAME}/${cookieState.player.match.matchID}`)
        .then(({ data }) => {
          if (!data.matchID) {
            setControl({ valid: false, loading: false });
          } else {
            setMatchConfig({
              playerName: cookieState.player.playerName,
              playerID: cookieState.player.playerID,
              matchID: cookieState.player.match.matchID,
              credential: cookieState.player.match.credential,
              deckID: cookieState.player.deckID,
            });
            setControl(prev => ({ valid: true, loading: false }));
          }
        }).catch(error => {
          console.log(error);
          setControl({ valid: false, loading: false });
        });
    }
  }, []);

  if (control.loading) {
    <div className={classes.container}>
      <h1>Loading</h1>
    </div>
  }

  if (!control.valid) {
    return (
      <div className={classes.container}>
        <h4>Match not found or dont exist</h4>
        <a href="/lobby">Go to lobby</a>
      </div>
    );
  }

  return (
    <>
      <SimulatorClient
        deckID={matchConfig.deckID}
        playerID={matchConfig.playerID}
        credentials={matchConfig.credential}
        matchID={matchConfig.matchID}
      />
      {matchConfig && (

        <div className={classes.container}>
          <h1>Your info</h1>
          <p>MatchID: {matchConfig.matchID}</p>
          <p>PlayerName: {matchConfig.playerName}</p>
          <p>playerID: {matchConfig.playerID}</p>
          <p>credentials: {matchConfig.credential}</p>
        </div>
      )}
    </>
  );



}

export default ArenaPage;
