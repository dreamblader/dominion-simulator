import React from "react";
import NoInputLayer from "../no-input-layer";
import Load from "../../../images/ticks/cooldown.png";
import "./wait-screen-style.css";

const WaitScreen = ({ message }) => (
  <NoInputLayer fullscreen={true}>
    <h1>{message}</h1>
    <img src={Load} />
  </NoInputLayer>
);

export default WaitScreen;
