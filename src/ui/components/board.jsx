import React from "react";
import "../styles/board.css";

const Board = (props) => {

    const dominionIds = props.ids[0] === 1 ? [4, 3]: [3, 4];

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
                case props.ids[0]+1:
                    return "hoverable user";
                case props.ids[1]+1:
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
                    {getCardView(tile.cards[0])}
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
            {props.life[props.ids[0]]}
            </div>);
        } else if(spawn === dominionIds[1]){
            return(<div className="content">
            {props.life[props.ids[1]]}
            </div>);
        }
    }

    const clickSpawnTile = (x, y) => {
        if(props.selected){
            props.moves.placeInHere(props.selected, x,y);
            props.clear();
        }
    }

    const getCardView = (card) => {
        if(card){
            return card.id	
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