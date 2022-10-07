import React from "react";
import PropTypes from "prop-types";
import Jar from "../gameplay/jar";
import { Origin } from "../../../../models/enums";
import { ClassNames, getExtraClasses } from "../../../../utils/style-class";
import { isEmpty } from "../../../../utils/help";
import { GameContext } from "Client/context/game";
import CardStack from "../card/card-stack/card-stack";

const DeckColumn = ({ menu, selection }) => {
  const {
    myID,
    rivalID,
    G: { deck, destroyZone, out },
  } = React.useContext(GameContext);

  const [myDeck, rivalDeck] = [deck[myID].cards, deck[rivalID].cards];
  const [myDZ, rivalDZ] = [destroyZone[myID], destroyZone[rivalID]];
  const isSelected = selection;
  const [deckMenu, dzMenu, oogMenu] = menu;

  const checkDeck = (e) => {
    if (myDeck.length > 0) {
      deckMenu(e);
    }
  };

  return (
    <div className="deck-col">
      <CardStack items={rivalDeck} disabled={true} />
      <CardStack
        items={rivalDZ}
        disabled={isEmpty(rivalDZ)}
        isInverted={true}
        click={() => dzMenu(rivalID, false)}
      />
      <Jar disabled={isEmpty(out)} click={() => oogMenu()} />
      <CardStack
        items={myDZ}
        disabled={isEmpty(myDZ)}
        isSelected={isSelected(Origin.DZ)}
        click={(e) => dzMenu(myID, true)}
      />
      <CardStack
        items={myDeck}
        disabled={isEmpty(myDeck)}
        isFlipped={true}
        click={(e) => checkDeck(e)}
      />
    </div>
  );
};

DeckColumn.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.func),
  selection: PropTypes.func,
};

export default DeckColumn;
