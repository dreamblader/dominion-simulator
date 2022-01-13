import React from "react";
import PropTypes from 'prop-types';
import "../../styles/no-input-layer.css";

const NoInputLayer = ({children}) => (
        <div className="no-input">  
            {children}
        </div>
)

NoInputLayer.propTypes = {
    children: PropTypes.node
}

export default NoInputLayer;