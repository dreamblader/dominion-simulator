import React from "react";
import PropTypes from "prop-types";
import HtmlParser from "react-html-parser";
import { Types } from "../../../../models/enums";
import {
  getCurrentATK,
  getCurrentHP,
  getCurrentRange,
} from "../../../../utils/card";
import CardArt from "../card/card-art";
import StatusSegment from "../general/status-segment";
import TickLabel from "../general/tick-label";

const StatusColumn = ({ card }) => {
  const currentATK = getCurrentATK(card);
  const currentHP = getCurrentHP(card);
  const currentRange = getCurrentRange(card);

  const renderTags = (tags) => {
    let result = "";
    if (Array.isArray(tags)) {
      tags.forEach((tag, index) => {
        result += tag;
        result += tags[index + 1] ? " | " : "";
      });
    }
    return result;
  };

  const getStatClass = (originalStat, currentStat) => {
    if (currentStat < originalStat) {
      return "negative";
    } else if (currentStat > originalStat) {
      return "positive";
    }
    return "";
  };

  const renderStatus = () => {
    const element = card.type === Types.UNITY ? "ELEMENT:" : "ACTIVATION:";
    return (
      card.type !== Types.FIELD && (
        <div className="status-segment">
          {card.type !== Types.TOKEN && (
            <div className="stat">
              <div>{element}</div>
              <div>{card.element}</div>
            </div>
          )}
          <div className="stat">
            <div>ATK:</div>
            <div className={getStatClass(card.atk, currentATK)}>
              {currentATK}
            </div>
          </div>
          <div className="stat">
            <div>HP:</div>
            <div className={getStatClass(card.hp, currentHP)}>{currentHP}</div>
          </div>
          {currentRange !== 0 && (
            <div className="stat">
              <div>RG:</div>
              <div>{currentRange}</div>
            </div>
          )}
        </div>
      )
    );
  };

  const renderTicks = () => {
    return (
      <React.Fragment>
        {card.status.length > 0 && (
          <StatusSegment>
            <div className="tick-status">
              {card.status.map((tick, index) => (
                <TickLabel content={tick} key={index} />
              ))}
            </div>
          </StatusSegment>
        )}
      </React.Fragment>
    );
  };

  return (
    <div className={"status-col"}>
      {card.id && (
        <React.Fragment>
          <StatusSegment>
            <div>
              <h2>{card.title}</h2>
            </div>
          </StatusSegment>
          <StatusSegment>
            <CardArt card={card} />
          </StatusSegment>
          <StatusSegment>{renderStatus()}</StatusSegment>
          {renderTicks()}
          <StatusSegment>
            <div>{HtmlParser(card.description)}</div>
            <div>{renderTags(card.tags)}</div>
          </StatusSegment>
        </React.Fragment>
      )}
    </div>
  );
};

StatusColumn.propTypes = {
  card: PropTypes.object,
};

export default StatusColumn;
