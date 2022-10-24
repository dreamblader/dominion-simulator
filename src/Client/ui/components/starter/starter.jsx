import React from "react";
import "./starter-style.css";

const Starter = ({ message }) => {
  const [init, setInit] = React.useState(false);

  return (
    <React.Fragment>
      {!init && (
        <div className="start-msg" onAnimationEnd={() => setInit(true)}>
          <h1>{message}</h1>
        </div>
      )}
    </React.Fragment>
  );
};

export default Starter;
