import React from "react";
import HtmlParser from "react-html-parser";
import { renderCard } from "../../../utils/card";
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
                    STATUS+ELEMENT
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