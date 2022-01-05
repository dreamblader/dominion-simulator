import React from "react";
import HtmlParser from "react-html-parser";
import { Types } from "../../../../models/enums";
import { renderCard } from "../../../../utils/render";
import { getCurentATK, getCurentHP, getCurrentRange } from "../../../../utils/card";
import StatusSegment from "../status-segment"

const StatusColumn = (props) => {

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
        const element = props.card.type === Types.UNITY ? "ELEMENT:" : "ACTIVATION:"
        const currentATK = getCurentATK(props.card);
        const currentHP = getCurentHP(props.card);
        const currentRange = getCurrentRange(props.card);
        return(props.card.type !== Types.FIELD && 
            <div className="status-segment"> 
                <div className="stat">
                    <div>{element}</div>
                    <div>{props.card.element}</div>
                </div>
                <div className="stat">
                    <div>ATK:</div>
                    <div className={getStatClass(props.card.atk ,currentATK)}>
                        {currentATK}
                    </div>
                </div>
                <div className="stat">
                    <div>HP:</div>
                    <div className={getStatClass(props.card.hp ,currentHP)}>
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
            {props.card.id &&
            <div>
                <StatusSegment>
                    <div><h3>{props.card.title}</h3></div>
                </StatusSegment>
                <StatusSegment>
                    {renderCard(props.card)}
                </StatusSegment>
                <StatusSegment>
                    {renderStatus()}  
                </StatusSegment>
                <StatusSegment>
                    {HtmlParser(props.card.description)}
                    <div>
                        {renderTags(props.card.tags)}
                    </div>
                </StatusSegment>
            </div>}
        </div>
    )
}

export default StatusColumn;