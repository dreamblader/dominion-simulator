import React, { Component } from "react";
import { } from "react-router-dom";
import _ from "lodash";
import { LobbyClient } from 'boardgame.io/client';

// Constants & Helpers
import K from "utils/constants";

// Custom component
import MatchesTable from "Client/Components/MatchesTable/MatchesTable";
import ProfileComponent from "Client/Components/PorfileComponent/ProfileComponent";
import MatchMessage from "Client/Components/MatchMessage/MatchMessage";
import Form from "Client/Components/Form/Form";
import Button from "Client/Components/Button/Button";

// Classes
import classes from "./Lobby.module.css";

// Util
const lobbyClient = new LobbyClient({ server: 'http://localhost:8000' });
/**
 * LobbyPage
 */
class LobbyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lobbyState: initialLobbyState,
      matches: [],
    };
    this.checkState = this.checkState.bind(this);
    this.formSubmitHandler = this.formSubmitHandler.bind(this);
    this.resetProfileHandler = this.resetProfileHandler.bind(this);
    this.getMatches = this.getMatches.bind(this);
    this.joinMatchHandler = this.joinMatchHandler.bind(this);
    this.createNewMatchHandler = this.createNewMatchHandler.bind(this);
    this.leavingMatchHandler = this.leavingMatchHandler.bind(this);
  }

  componentDidMount() {
    this.checkState();
    this.getMatches();
  }

  componentDidUpdate() {
    this.getMatches();
  }

  // componentWillUnmount() {
  //   console.log("[componentWillUnmount]");
  // }

  async checkState() {
    const lobbyStateStorage = localStorage.getItem("lobbyState");
    if (lobbyStateStorage) {
      try {
        const initialState = JSON.parse(lobbyStateStorage);
        this.setState(prev => {
          return ({
            ...prev,
            lobbyState: initialState,
          });
        });
        // This verify if the localStorage have a match that doenst exist
        if (initialState.phase === 'wait' || initialState.phase === 'play') {
          try {
            await lobbyClient.getMatch(K.GAME_NAME, initialState.player.match.matchID);
          } catch (e) {
            console.log("ERROR");
            this.setState(prev => {
              const newLobbyState = {
                ...prev.lobbyState,
                phase: "list",
                player: {
                  ...prev.lobbyState.player,
                  playerID: "",
                  match: {
                    matchID: "",
                    credential: "",
                  }
                }
              }
              localStorage.setItem("lobbyState", JSON.stringify(newLobbyState));
              return {
                ...prev,
                lobbyState: newLobbyState
              }
            });
          }
        }
      } catch (e) {
        console.log("Error");
        console.log(e);
        localStorage.removeItem("lobbyState");
      }
    }
  }

  formSubmitHandler(values) {
    const { playerName, deckID } = values;
    this.setState(prev => {
      const newLobbyState = {
        ...prev.lobbyState,
        player: {
          ...prev.lobbyState.player,
          playerName,
          deckID,
        },
        phase: "list"
      }
      localStorage.setItem("lobbyState", JSON.stringify(newLobbyState));
      return {
        ...prev,
        lobbyState: newLobbyState
      }
    });
  }

  resetProfileHandler() {
    this.setState(prev => ({
      ...prev,
      lobbyState: initialLobbyState
    }));
    localStorage.removeItem("lobbyState");
  }

  // Functions match control
  getMatches = async function () {
    const { matches } = await lobbyClient.listMatches(K.GAME_NAME);
    if (!_.isEqual(matches, this.state.matches)) {
      this.setState(prev => ({
        ...prev,
        matches: matches
      }));
    }
  };
  // Create new match
  createNewMatchHandler = async function () {
    const { matchID } = await lobbyClient.createMatch(K.GAME_NAME, {
      numPlayers: 2
    });
    this.joinMatchHandler(matchID, '0');
  }
  // Connect Match
  joinMatchHandler = async function (matchID, playerID) {
    const { playerCredentials } = await lobbyClient.joinMatch(
      K.GAME_NAME,
      matchID,
      {
        playerName: this.state.lobbyState.player.playerName,
        playerID: playerID
      }
    );
    this.setState(prev => {
      const newLobbyState = {
        ...prev.lobbyState,
        phase: 'wait',
        player: {
          ...prev.lobbyState.player,
          playerID: playerID,
          match: {
            matchID: matchID,
            credential: playerCredentials,
          }
        }
      }
      localStorage.setItem("lobbyState", JSON.stringify(newLobbyState));
      return {
        ...prev,
        lobbyState: newLobbyState
      };
    });
  }

  // Leaving match
  leavingMatchHandler = async function () {
    await lobbyClient.leaveMatch(K.GAME_NAME, this.state.lobbyState.player.match.matchID, {
      playerID: this.state.lobbyState.player.playerID,
      credentials: this.state.lobbyState.player.match.credential,
    });
    this.setState(prev => {
      const newLobbyState = {
        ...prev.lobbyState,
        phase: "list",
        player: {
          ...prev.lobbyState.player,
          playerID: "",
          match: {
            matchID: "",
            credential: "",
          }
        }
      }
      localStorage.setItem("lobbyState", JSON.stringify(newLobbyState));
      return {
        ...prev,
        lobbyState: newLobbyState
      }
    });
  }

  render() {
    const { lobbyState, matches } = this.state;
    return (
      <div className={classes.container}>
        <div className={classes.titleBox}>
          <h1 className={classes.title}>
            {K.GAME_NAME.replace("_", " ")}
          </h1>
          <h3 className={classes.subtitle}>Main Lobby - phase: {lobbyState.phase}</h3>
        </div>
        <div className={classes.profile}>
          {lobbyState.phase === "enter" ? (
            <Form
              formFields={formFields}
              onSubmit={this.formSubmitHandler}
              initialValues={formInitialValues}
            />
          ) : (lobbyState.phase === "list" || lobbyState.phase === "wait") && (
            <ProfileComponent
              profile={lobbyState.player}
              changeProfile={this.resetProfileHandler}
            />
          )}
          {lobbyState.phase === "wait" && (
            <MatchMessage
              onLeave={this.leavingMatchHandler}
              matchID={lobbyState.player.match.matchID}
              playerName={lobbyState.player.playerName}
            />
          )}
        </div>
        {lobbyState.phase === "list" && (
          <div className={classes.tableBox}>
            <div className={classes.tableHead}>
              <h4 className={classes.tableTitle}>Matches</h4>
              <div className={classes.tableBtn}>
                <Button text="Create" onClick={this.createNewMatchHandler} />
                <Button text="Refresh" onClick={this.checkState} />
              </div>
            </div>
            <MatchesTable
              matches={matches}
              playerName={lobbyState.player.playerName}
              enterMatch={this.joinMatchHandler}
            />
          </div>
        )}
      </div >
    )
  }
}

export default LobbyPage;

/**
 * LobbyState
 */
const initialLobbyState = {
  phase: "enter",
  player: {
    playerName: "",
    playerID: "",
    deckID: "",
    match: {
      matchID: "",
      credential: "",
    }
  },
}

/**
 * Array of object for creation of a generic form
 */
const formFields = [
  {
    label: "Your name",
    name: "playerName",
    type: "text",
    placeholder: "ex. Visitor",
    disabled: false,
    hidden: false,
  }, {
    // Default Decks
    // (opt) are the possible start deck or something
    label: "Choose your deck",
    name: "deckID",
    type: "select",
    options: [
      {
        name: "Deck one",
        value: "1"
      },
    ],
    disabled: false,
    hidden: false,
  }
];

/**
 * FormInitialValues
 */

const formInitialValues = {
  playerName: "visitor",
  deckID: "0"
}