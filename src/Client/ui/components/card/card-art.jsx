import React from "react";
import PropTypes from 'prop-types';

const CardArt = ({card, reveal}) => (
    card && reveal && card.art &&
        <img src={`${window.location.origin}/img/${card.art}`} alt={card.name} />
);

CardArt.propTypes = {
    card: PropTypes.object, 
    reveal: PropTypes.bool
}

CardArt.defaultProps = {
    card: {}, 
    reveal: true
}

export default CardArt;