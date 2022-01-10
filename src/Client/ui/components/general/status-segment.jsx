import React from "react";
import PropTypes from "prop-types";
import "../../styles/status-segment.css";

const StatusSegment = ({children}) => (
    <div className="segment">
        {children}
    </div>
)

StatusSegment.propTypes = {
    children: PropTypes.node
}

export default StatusSegment;