import React from "react";
import Card from "../card"
import Jar from "../jar"
import { Origin } from "../../../../models/enums";
import { ClassNames, getExtraClasses } from "../../../../utils/style-class";
import { isEmpty } from "../../../../utils/help";

const DeckColumn = (props) => {

    const [myID, rivalID] = props.ids;
    const [myDeck, rivalDeck] = [props.decks[myID], props.decks[rivalID]];
    const [myDZ, rivalDZ] = [props.dzs[myID], props.dzs[rivalID]];
    const isSelected = props.selection; 
    const [deckMenu, dzMenu, oogMenu] = props.menu;


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
                getExtraClasses(isEmpty(props.out), ClassNames.DISABLED)
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

export default DeckColumn;