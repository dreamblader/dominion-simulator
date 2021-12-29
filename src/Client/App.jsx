import React from "react";
import clsx from "clsx";

// Route control
import { Routes, Route, NavLink } from "react-router-dom";

// Custom Pages
import LobbyPage from "./Pages/Lobby/Lobby";
import HomePage from "Client/Pages/Home/Home";
import Arena from "Client/Pages/Arena/Arena";

// Styles
import classes from "./App.module.css";

const App = () => {
  const classNameFunction = ({ isActive }) => clsx(classes.link, isActive && classes.active)

  return (
    <div className={classes.container}>
      <nav className={classes.nav}>
        {routes('link').map((item) => (
          <NavLink key={item.label} className={classNameFunction} to={item.to}>
            {item.label}
          </NavLink>
        ))}
        <a className={classes.link} href="https://boardgame.io/" target="_blank" rel="noreferrer" >Boardgame.io</a>
      </nav>
      <Routes>
        {routes('route').map((item) => (
          <Route key={item.label} path={item.to} element={item.component} />
        ))}
      </Routes>
    </div>
  );
}

export default App;

// Routes Array - build the routes & nav
// It's a function that returns an array
const routes = (filter) => {
  const array = [{
    label: "Home",
    component: <HomePage />,
    to: "/",
    route: true,
    link: true,
  }, {
    label: "Lobby",
    component: <LobbyPage />,
    to: "/lobby",
    route: true,
    link: true,
  }, {
    label: "Arena",
    component: <Arena />,
    to: "/arena",
    route: true,
    link: true,
  }, {
    label: "AremaMatch",
    component: <Arena />,
    to: "/arena/:matchID",
    route: true,
    link: false,
  }];

  if (filter === 'route') {
    return array.filter(i => i.route);
  }
  if (filter === 'link') {
    return array.filter(i => i.link);
  }
  return array;
};
