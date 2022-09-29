import React from "react";
import NoInputLayer from "../no-input-layer";
import "./wait-screen-style.css";

const WaitScreen = ({ message }) => (
  <NoInputLayer fullscreen={true}>
    <h1>{message}</h1>
  </NoInputLayer>
);

export default WaitScreen;
