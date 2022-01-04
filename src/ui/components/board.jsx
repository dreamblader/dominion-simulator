import React from "react";
import Card from "./card";
import { Types } from "../../models/enums";
import { ClassNames, getExtraClasses } from "../../utils/style-class";
import { getCurentHP, getCurentATK } from "../../utils/card";
import "../styles/board.css";


const Board = (props) => {

    const [myID, rivalID] = props.ids
    const dominionIds = myID === 1 ? [4, 3]: [3, 4];

    const isInversed = (card) => (card.controller !== myID) !== card.inversed

    const renderTile = (tile, i, j) => {
        let id = i+"-"+j
        let typeName = getClassName(tile)
        return(<div 
        className={typeName+" tile-holder"}
         key={id}>
             {getContent(tile)}
             </div>);
    }

    const getClassName = (tile) =>{
        if(tile){
            switch(tile.spawn){
                case myID+1:
                    return "hoverable user";
                case rivalID+1:
                    return "hoverable rival";
                case dominionIds[0]:
                    return "dominion user";
                case dominionIds[1]:
                    return "dominion rival";
                default:
                    return "hoverable";
            }
        } else {
            return "";
        }
        
    }

    const getContent = (tile) =>{
        if(tile){
            let extraClass = props.selected ? " selected" : "";
            if(tile.spawn === 3  || tile.spawn === 4){
                return getLifeTile(tile.spawn);
            } else {
                return (<div className={"content"+extraClass}
                 onClick={() => clickSpawnTile(tile.originalX, tile.originalY)}>
                    {getCardView(tile.cards[0], tile)}
                </div>)
            }
        } else {
            return "";
        }
        
    }

    const getLifeTile = (spawn) => {
        if(spawn === dominionIds[0]){
            return(<div className="content" 
            onClick={()=> props.moves.myLifeMenu()}>
            {props.life[myID]}
            </div>);
        } else if(spawn === dominionIds[1]){
            return(<div className="content">
            {props.life[rivalID]}
            </div>);
        }
    }

    const clickSpawnTile = (x, y) => {
        if(props.selected){
            props.moves.placeInHere(props.selected, x,y);
            props.clear();
        }
    }

    const getCardView = (card, tile) => {
        if(card){
            let extraClass = getExtraClasses(isInversed(card), ClassNames.INVERTED) 

            return (
            <Card card={card}
                highlight={props.highlight}
                extraClass={extraClass+" "+ClassNames.DISABLED}
                click={(e) => props.menuClick(e, tile, myID)} >
                {!card.flipped && card.type === Types.UNITY &&
                    <div className="txt-info">
                        {getCurentATK(card)+"/"+getCurentHP(card)}
                    </div>
                }
            </Card>)	
        } else {
            return "";
        }
    }

       return(
        <div className="board">
            {props.board.map((row, i) => (
                row.map((tile, j) => renderTile(tile, i, j))
        ))}
        </div>
)}

export default Board;