import React from "react";
import "../styles/board.css";

const Board = (props) => {
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
                case 1:
                    return "hoverable user";
                case 2:
                    return "hoverable rival";
                case 3:
                    return "dominion user";
                case 4:
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
            if(tile.spawn === 3  || tile.spawn === 4){
                return props.life[tile.spawn-3];
            } else {
                return tile.cards[0]
            }
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