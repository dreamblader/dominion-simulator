import React from "react";

// Classes
import classes from "./MatchMessage.module.css";

// Cmp
import Button from "Client/Components/Button/Button";

/**
 * 
 * @param {onLeave} onLeave: fn to leave the current match
 * @param {onRefresh} onRefresh: fn force loading
 * @param {match} match: obj match 
 * @param {playerName} playerName: string player name 
 * @returns 
 */
const MatchMessage = ({ matchID, onLeave, playerName }) => {

  return (
    <div className={classes.container}>
      <div className={classes.textBox}>
        <h4 className={classes.title}>
          There is a match going on
        </h4>

        <p>This is the id of the match: </p>
        <code className={classes.code}>{matchID}</code>
        <div className={classes.match}>
          <a className={classes.btnLink} href={`/arena/${matchID}`}>Go to mach</a>
          <Button
            classes={classes.btn}
            text="Leave the match"
            styled="outlined"
            onClick={onLeave}
          />
        </div>
      </div>
      <div className={classes.bgImg} >
        Domi<br />nion
      </div>
    </div>
  );
}

export default MatchMessage;