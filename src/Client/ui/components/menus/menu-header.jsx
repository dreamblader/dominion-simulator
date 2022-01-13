import React from "react";
import PropTypes from 'prop-types';
import Button from "../general/button";

const MenuHeader = ({header, clear}) => (
    <div className="header">
        {header}
        <Button extraClass=" quit"
        click={clear}
        >X</Button>
    </div>
);

MenuHeader.propTypes = {
    header: PropTypes.string,
    clear: PropTypes.func
}

export default MenuHeader;
