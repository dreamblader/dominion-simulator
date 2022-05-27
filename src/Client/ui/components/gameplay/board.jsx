import React from "react";
import PropTypes from "prop-types";
import Card from "../card/card";
import { SelectTypes, Types } from "../../../../models/enums";
import { ClassNames, getExtraClasses } from "../../../../utils/style-class";
import { getTileCard, isFieldOnTile } from "utils/board";
import {
  getCurrentHP,
  getCurrentATK,
  getCurrentRange,
} from "../../../../utils/card";
import Place from "models/place";
import "../../styles/board.css";
import Combat from "models/combat";

const Board = ({
  board,
  ids,
  moves,
  selected,
  combat,
  life,
  menuClick,
  highlight,
  clear,
}) => {
  const [myID, rivalID] = ids;
  const dominionIds = myID === 1 ? [4, 3] : [3, 4];

  const [refreshKey, setRefreshKey] = React.useState(0);

  const isInversed = (card) => (card.controller !== myID) !== card.inversed;

  const isAtk = (tile) =>
    tile.originalX === combat.atk.x && tile.originalY === combat.atk.y;

  const isDef = (tile) =>
    tile.originalX === combat.def.x && tile.originalY === combat.def.y;

  const renderTile = (tile, i, j) => {
    let id = i + "-" + j;
    let typeName = getClassName(tile);
    return (
      <div className={typeName + " tile-holder"} key={id}>
        {getContent(tile)}
      </div>
    );
  };

  const getClassName = (tile) => {
    if (tile) {
      switch (tile.spawn) {
        case myID + 1:
          return "hoverable user";
        case rivalID + 1:
          return "hoverable rival";
        case dominionIds[0]:
          return "dominion user";
        case dominionIds[1]:
          return "dominion rival";
        default:
          return "hoverable";
      }
    } else {
      return "";
    }
  };

  const getContent = (tile) => {
    if (tile) {
      let extraClass = selected ? " selected" : "";
      if (tile.spawn === 3 || tile.spawn === 4) {
        return getLifeTile(tile.spawn);
      } else {
        return (
          <div
            className={"content" + extraClass}
            onClick={() => clickSpawnTile(tile.originalX, tile.originalY)}
          >
            {getCardView(tile.cards[0], tile)}
          </div>
        );
      }
    } else {
      return "";
    }
  };

  const getLifeTile = (spawn) => {
    if (spawn === dominionIds[0]) {
      return (
        <div className="content" onClick={() => moves.myLifeMenu()}>
          {life[myID]}
        </div>
      );
    } else if (spawn === dominionIds[1]) {
      return <div className="content">{life[rivalID]}</div>;
    }
  };

  const clickSpawnTile = (x, y) => {
    if (selected) {
      switch (selected.type) {
        case SelectTypes.TO_BOARD:
          moves.placeInHere(selected, x, y);
          break;
        case SelectTypes.TO_ATTACK:
          let combat = Combat(Place(selected.x, selected.y), Place(x, y));
          setRefreshKey(Math.floor(Math.random() * 1000));
          moves.attackCard(combat);
          break;
        default:
          break;
      }
      clear();
    }
  };

  const clickCardTile = (e, tile) => {
    if (!selected) {
      menuClick(e, tile, myID);
    }
  };

  const getCardView = (card, tile) => {
    let key = `${tile.originalX}${tile.originalY}${refreshKey}`;

    if (card) {
      let extraClass = getExtraClasses(
        [isInversed(card), isAtk(tile), isDef(tile)],
        [ClassNames.INVERTED, ClassNames.ATK, ClassNames.DEF]
      );

      return (
        <Card
          card={card}
          key={key}
          highlight={highlight}
          extraClass={extraClass + " " + ClassNames.DISABLED}
          click={(e) => clickCardTile(e, tile)}
        >
          <div className="overlay">{renderOverlay(card, tile)}</div>
        </Card>
      );
    } else {
      return "";
    }
  };

  const renderOverlay = (card, tile) => {
    return (
      <React.Fragment>
        {renderInfo(tile)}
        {renderTicks(card.status)}
        {renderStats(card)}
      </React.Fragment>
    );
  };

  const renderInfo = (tile) => {
    let cards = tile.cards;
    let field = isFieldOnTile(cards);
    return (
      <React.Fragment>
        <div className="top-right">
          {cards.length > 1 && (
            <div className="txt-info" onClick={(e) => clickPlus(e, tile)}>
              +
            </div>
          )}
        </div>
        {field && (
          <div
            className="top-left txt-info"
            onMouseEnter={() => highlight(field)}
            onMouseLeave={() => highlight(cards[0])}
          >
            F
          </div>
        )}
      </React.Fragment>
    );
  };

  const clickPlus = (e, tile) => {
    moves.getTileCardsList(tile);
    e.stopPropagation();
  };

  const renderStats = (card) => {
    let ticks = card.status.length;
    let isCardTypeWithStatus =
      card.type === Types.UNITY || card.type === Types.TOKEN;
    if (!card.flipped && isCardTypeWithStatus) {
      return (
        <div className="bottom">
          <div className="txt-info">
            {getCurrentATK(card) + "/" + getCurrentHP(card)}
          </div>
          <div className="txt-info">{renderRange(card)}</div>
        </div>
      );
    }
  };

  const renderTicks = (ticks) => {
    let size = ticks.length;
    return (
      <React.Fragment>
        {size > 0 && <div className="tick">{`x${size}`} </div>}
      </React.Fragment>
    );
  };

  const renderRange = (card) => {
    if (getCurrentRange(card) !== 0) {
      let signal = getCurrentRange(card) > 0 ? "+" : "";
      return signal + getCurrentRange(card);
    }
    return "";
  };

  return (
    <div className="board">
      {board.map((row, i) => row.map((tile, j) => renderTile(tile, i, j)))}
    </div>
  );
};

Board.propTypes = {
  board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)),
  ids: PropTypes.arrayOf(PropTypes.number),
  moves: PropTypes.object,
  selected: PropTypes.object,
  life: PropTypes.arrayOf(PropTypes.number),
  menuClick: PropTypes.func,
  highlight: PropTypes.func,
  clear: PropTypes.func,
};

export default Board;
