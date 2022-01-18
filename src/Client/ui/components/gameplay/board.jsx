import React from "react";
import PropTypes from 'prop-types';
import Card from "../card/card";
import { Types } from "../../../../models/enums";
import { ClassNames, getExtraClasses } from "../../../../utils/style-class";
import { isFieldOnTile } from "utils/board";
import { getCurentHP, getCurentATK, getCurrentRange } from "../../../../utils/card";
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
                <div className="overlay">
                    {renderOverlay(card, tile)}
                </div> 
            </Card>)	
        } else {
            return "";
        }
    }

    const renderOverlay = (card, tile) => {
        return( 
            <React.Fragment>
            {renderInfo(tile)}
            {renderStats(card)}
            </React.Fragment>
        )
    }

    const renderInfo = (tile) => {
        let cards = tile.cards
        let field = isFieldOnTile(cards);
        if(cards.length > 1){
            return(
                <React.Fragment>
                    <div className="top-right txt-info" 
                    onClick={(e) => clickPlus(e, tile)}>
                        +
                    </div>
                    {field && 
                        <div className="top-left txt-info"
                        onMouseEnter={() => highlight(field)}
                        onMouseLeave={() => highlight(cards[0])}>
                            F
                        </div>
                    }
                </React.Fragment>
            )
        }
    }

    const clickPlus = (e, tile) => {
        moves.getTileCardsList(tile)
        e.stopPropagation();
    }

    const renderStats = (card) => {
        if(!card.flipped && card.type === Types.UNITY){
            return (
                <div className="bottom">
                    <div className="txt-info">
                        {getCurentATK(card)+"/"+getCurentHP(card)}
                    </div>
                    <div className="txt-info">
                        {renderRange(card)}
                    </div>
                </div>
            )
        }
    }

    const renderRange = (card) => {
        if(getCurrentRange(card) !== 0){
            return getCurrentRange(card) > 0 ? "+" : "" +getCurrentRange(card)
        }
        return "";
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