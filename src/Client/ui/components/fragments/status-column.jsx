import React from "react";
import PropTypes from 'prop-types';
import HtmlParser from "react-html-parser";
import { Types } from "../../../../models/enums";
import { getCurentATK, getCurentHP, getCurrentRange } from "../../../../utils/card";
import CardArt from "../card/card-art";
import StatusSegment from "../general/status-segment"

const StatusColumn = ({card}) => {

    const renderTags = (tags) => {
        let result="";
        if(Array.isArray(tags)){
            tags.forEach((tag, index) => {
                result+=tag;
                result+= tags[index+1] ? " | " : "";
            });
        }
        return result;
    }

    const getStatClass = (originalStat, currentStat) => {
        const diff = originalStat - currentStat;
        if(diff < 0){
            return "negative";
        } else if(diff > 0){
            return "positive";
        }
        return "";
    }

    const renderStatus = () => {
        const element = card.type === Types.UNITY ? "ELEMENT:" : "ACTIVATION:"
        const currentATK = getCurentATK(card);
        const currentHP = getCurentHP(card);
        const currentRange = getCurrentRange(card);
        return(card.type !== Types.FIELD && 
            <div className="status-segment"> 
                <div className="stat">
                    <div>{element}</div>
                    <div>{card.element}</div>
                </div>
                <div className="stat">
                    <div>ATK:</div>
                    <div className={getStatClass(card.atk ,currentATK)}>
                        {currentATK}
                    </div>
                </div>
                <div className="stat">
                    <div>HP:</div>
                    <div className={getStatClass(card.hp ,currentHP)}>
                        {currentHP}
                    </div>
                </div>
                {currentRange !== 0 &&
                <div className="stat">
                    <div>RANGE:</div>
                    <div>{currentRange}</div>
                </div>}
            </div>
        )
    }

    return(
        <div className="status-col">
            {card.id &&
            <div>
                <StatusSegment>
                    <div><h3>{card.title}</h3></div>
                </StatusSegment>
                <StatusSegment>
                    <CardArt card={card} />
                </StatusSegment>
                <StatusSegment>
                    {renderStatus()}  
                </StatusSegment>
                <StatusSegment>
                    {HtmlParser(card.description)}
                    <div>
                        {renderTags(card.tags)}
                    </div>
                </StatusSegment>
            </div>}
        </div>
    )
}

StatusColumn.propTypes = {
    card: PropTypes.object
}

export default StatusColumn;