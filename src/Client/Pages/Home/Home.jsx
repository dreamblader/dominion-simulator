import React from "react";
import clsx from "clsx";

// Constants
import K from "utils/constants";
// Style Classes
import classes from "./Home.module.css";

/**
 * HomePage Component
 * This component return the homepage where you can access
 * the custom lobby or the default lobby
*/
const HomePage = props => {
  return (
    <div className={classes.main}>
      <h1 className={classes.title}>
        {K.GAME_NAME.replace("_", " ")}
      </h1>
      <div className={classes.box}>
        <h2 className={classes.boxTitle}>Welcome to the Dominion Game.</h2>

        <p className={classes.boxText}>
          This prototype has tree main <code>routes</code>, in addition to the Home page (current page).
        </p>
        <p className={classes.boxText}>Theses pages are:</p>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            Lobby:
            <span>
              A custom lobby that display all matches and provide a way to connect
            </span>
          </li>
          <li className={classes.listItem}>
            Arena:
            <span>
              This is the board of the game create in the Lobby, if a match is start you can access this route
            </span>
          </li>
          <li className={classes.listItem}>
            Game:
            <span>
              This is the default component of the Boardgame.io, works as a standalone system manage by the dashboard.io lib
            </span>
          </li>
        </ul>
        <div className={classes.boxButton}>
          <a href="/lobby" className={clsx(classes.button, classes.buttonOne)}>Lobby</a>
          <a href="/arena" className={clsx(classes.button, classes.buttonTwo)}>Arena</a>
          <a href="/game" className={clsx(classes.button, classes.buttonTree)}>Game</a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;