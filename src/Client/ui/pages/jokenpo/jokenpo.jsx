import React from "react";
import Button from "Client/ui/components/general/button";
import Rock from "../../images/misc/rock.png";
import Paper from "../../images/misc/paper.png";
import Scissor from "../../images/misc/scissors.png";
import "./style.css";

const JokenpoPage = () => {
  return (
    <div className="jokenpo-panel">
      <Button>
        <img src={Rock} />
      </Button>
      <Button>
        <img src={Paper} />
      </Button>
      <Button>
        <img src={Scissor} />
      </Button>
    </div>
  );
};

export default JokenpoPage;
