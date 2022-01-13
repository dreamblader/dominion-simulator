import React from "react";
import PropTypes from 'prop-types';
import Card from "../card/card";
import { Types } from "../../../../models/enums";
import { ClassNames, getExtraClasses } from "../../../../utils/style-class";
import { getCurentHP, getCurentATK } from "../../../../utils/card";
import "../../styles/board.css";


const Board = ({board, ids, moves, selected, life, menuClick, highlight, clear}) => {

    const [myID, rivalID] = ids
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
            let extraClass = selected ? " selected" : "";
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
            onClick={()=> moves.myLifeMenu()}>
            {life[myID]}
            </div>);
        } else if(spawn === dominionIds[1]){
            return(<div className="content">
            {life[rivalID]}
            </div>);
        }
    }

    const clickSpawnTile = (x, y) => {
        if(selected){
            moves.placeInHere(selected, x,y);
            clear();
        }
    }

    const clickCardTile = (e, tile) => {
        if(!selected){
            menuClick(e, tile, myID)
        }
    }

    const getCardView = (card, tile) => {
        if(card){
            let extraClass = getExtraClasses(isInversed(card), ClassNames.INVERTED) 

            return (
            <Card card={card}
                highlight={highlight}
                extraClass={extraClass+" "+ClassNames.DISABLED}
                click={(e) => clickCardTile(e, tile)} >
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
            {board.map((row, i) => (
                row.map((tile, j) => renderTile(tile, i, j))
        ))}
        </div>
)}

Board.propTypes = {
    board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)), 
    ids: PropTypes.arrayOf(PropTypes.number),
    moves: PropTypes.object, 
    selected: PropTypes.object, 
    life: PropTypes.arrayOf(PropTypes.number), 
    menuClick: PropTypes.func, 
    highlight: PropTypes.func, 
    clear: PropTypes.func
}

export default Board;