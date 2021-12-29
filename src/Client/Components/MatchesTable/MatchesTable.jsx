import React from "react";
import moment from "moment";
import clsx from "clsx";
// Classes
import classes from "./MatchesTable.module.css"
/**
 * 
 * @param {matches, playerName} props
 * @param matches: array of matches from lobbyClient 
 * @param playerName: playerName 
 * @param enterMatch: function, handle enter in a match
 * @returns 
 */
const MatchesTables = ({ matches, playerName, enterMatch }) => {

  return (
    <table className={classes.table}>
      <thead>
        <tr className={classes.row}>
          <th className={classes.header}>MatchID</th>
          <th className={classes.header} colSpan={2}>Players</th>
          <th className={classes.header}>Create at</th>
          <th className={classes.header} />
        </tr>
      </thead>
      <tbody>
        {matches.map(match => (
          <tr className={classes.row} key={match.matchID}>
            <td className={classes.cell}>
              {match.matchID}
            </td>
            {match.players.map(player => (
              <td key={player.id} className={clsx(classes.cell, !player.name && classes.noPlayers)}>
                {player.name || "[open]"}
              </td>
            ))}
            <td className={classes.cell}>
              {moment().diff(match.createdAt, "m")} min ago
            </td>
            {/* BUTTONS */}
            {!match.players.find(player => (player.name === playerName)) && match.players.filter(player => (player.name)).length < 2 && (
              <td
                className={clsx(classes.cell, classes.cellBtn, classes.cellBtnGreen)}
                onClick={() => enterMatch(match.matchID, match.players.findIndex(player => player.name === undefined).toString())}
              >
                ENTER
              </td>
            )}
            {match.players.filter(player => (player.name)).length >= 2 && (
              <td
                className={classes.cell}
              >
                Full (spectate)
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MatchesTables;
/*
  createdAt: 1639885603873
  gameName: "dominion_simulator"
  matchID: "f2s4CQyxy63"
  players: Array [ {…}, {…} ]
  unlisted: false
  updatedAt: 1639885603873
*/