import React from "react";
import Card from "../../components/card"
import Jar from "../../components/jar"
import { Origin } from "../../../models/enums";
import { ClassNames, getExtraClasses } from "../../../utils/style-class";
import { isEmpty } from "../../../utils/help";

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
                {rivalDeck.cards.length}
            </Card>
            <Card
            extraClass={
                getExtraClasses([isEmpty(rivalDZ), isEmpty(rivalDZ)], 
                [ClassNames.DISABLED ,ClassNames.NO_COVER])
            } 
            click={() => dzMenu(rivalID, false)}>
                {rivalDZ.length}
            </Card>
            <Jar
            extraClass={
                getExtraClasses(isEmpty(props.out), ClassNames.DISABLED)
            }
            click={() => oogMenu()}>OUT</Jar>
            <Card 
            extraClass={
                getExtraClasses([isSelected(Origin.DZ), isEmpty(myDZ), isEmpty(myDZ)],
                 [ClassNames.SELECTED, ClassNames.DISABLED, ClassNames.NO_COVER])
            } 
            click={() => dzMenu(myID, true)}>
                {myDZ.length}
            </Card>
            <Card
            extraClass={
                getExtraClasses([isEmpty(myDeck.cards), isEmpty(myDeck.cards)],
                 [ClassNames.DISABLED, ClassNames.NO_COVER])
            } 
            click={(e) => checkDeck(e)}>
                {myDeck.cards.length}
            </Card>
        </div>
)}

export default DeckColumn;