import React from "react";
import PropTypes from 'prop-types';
import Card from "../card"
import Jar from "../jar"
import { Origin } from "../../../../models/enums";
import { ClassNames, getExtraClasses } from "../../../../utils/style-class";
import { isEmpty } from "../../../../utils/help";

const DeckColumn = ({ids, decks, dzs, out, menu, selection}) => {

    const [myID, rivalID] = ids;
    const [myDeck, rivalDeck] = [decks[myID], decks[rivalID]];
    const [myDZ, rivalDZ] = [dzs[myID], dzs[rivalID]];
    const isSelected = selection; 
    const [deckMenu, dzMenu, oogMenu] = menu;


    const checkDeck = (e) => {
        if(myDeck.cards.length > 0){
            deckMenu(e);
        }
    };

    return(
    <div className="deck-col">
            <Card extraClass={"disabled " + 
            getExtraClasses(isEmpty(rivalDeck.cards), ClassNames.NO_COVER)}>
                <div className="counter">{rivalDeck.cards.length}</div>
            </Card>
            <Card
            card={rivalDZ.at(-1)}
            extraClass={
                getExtraClasses([isEmpty(rivalDZ), isEmpty(rivalDZ), !isEmpty(rivalDZ)], 
                [ClassNames.DISABLED ,ClassNames.NO_COVER , ClassNames.INVERTED])
            } 
            click={() => dzMenu(rivalID, false)}>
                <div className="counter">{rivalDZ.length}</div>
            </Card>
            <Jar
            extraClass={
                getExtraClasses(isEmpty(out), ClassNames.DISABLED)
            }
            click={() => oogMenu()}>OUT</Jar>
            <Card
            card={myDZ.at(-1)} 
            extraClass={
                getExtraClasses([isSelected(Origin.DZ), isEmpty(myDZ), isEmpty(myDZ)],
                 [ClassNames.SELECTED, ClassNames.DISABLED, ClassNames.NO_COVER])
            } 
            click={() => dzMenu(myID, true)}>
                 <div className="counter">{myDZ.length}</div>
            </Card>
            <Card
            extraClass={
                getExtraClasses([isEmpty(myDeck.cards), isEmpty(myDeck.cards)],
                 [ClassNames.DISABLED, ClassNames.NO_COVER])
            } 
            click={(e) => checkDeck(e)}>
                <div className="counter">{myDeck.cards.length}</div>
            </Card>
        </div>
)}

DeckColumn.propTypes = {
    ids: PropTypes.arrayOf(PropTypes.number), 
    decks: PropTypes.arrayOf(PropTypes.object), 
    dzs: PropTypes.arrayOf(PropTypes.array), 
    out: PropTypes.array, 
    menu: PropTypes.arrayOf(PropTypes.func), 
    selection: PropTypes.func
}

export default DeckColumn;