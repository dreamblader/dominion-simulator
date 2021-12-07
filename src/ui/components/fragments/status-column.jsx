import React from "react";
import { renderCard } from "../../../utils/card";
import StatusSegment from "../status-segment"

const StatusColumn = (props) => {

    const renderTags = (tags) => {

    }

    return(
        <div className="status-col">
            <StatusSegment>
                <h3>{props.card.title}</h3>
            </StatusSegment>
            <StatusSegment>
                {renderCard(props.card)}
            </StatusSegment>
            <StatusSegment>
                STATUS+ELEMENT
            </StatusSegment>
            <StatusSegment>
                {props.card.description}
                <div>
                    {renderTags(props.card.tags)}
                </div>
            </StatusSegment>
        </div>
    )
}

export default StatusColumn;