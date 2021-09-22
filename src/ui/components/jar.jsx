import React from "react";
import "../styles/jar.css";

const Jar = (props) => (
    <div className="hoverable jar" onClick={props.click}>{props.children}</div>
)

export default Jar;