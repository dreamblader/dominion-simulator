import React from "react";
import "../styles/jar.css";

const Jar = (props) => (
    <div className="hoverable jar">{props.children}</div>
)

export default Jar;