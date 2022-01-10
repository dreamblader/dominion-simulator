import React from "react";
import PropTypes from 'prop-types';
import { orNothing } from "../../../../utils/help";
import "../../styles/jar.css";

const Jar = ({click, extraClass, children}) => (
    <div 
    className={"hoverable jar "+orNothing(extraClass)} 
    onClick={click}>
        {children}
        </div>
)

Jar.propTypes = {
    click: PropTypes.func, 
    extraClass: PropTypes.string, 
    children: PropTypes.node
}

export default Jar;