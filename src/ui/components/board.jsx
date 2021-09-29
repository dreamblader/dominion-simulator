import React from "react";
import "../styles/board.css";

const Board = (props) => {
    const renderTile = (tile, i, j) => {
        let id = i+"-"+j
        let typeName = getClassName(tile)
        return(<div 
        className={typeName+" tile-holder"}
         key={id}>
             {getContent(tile, i, j)}
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

    const getContent = (tile, x, y) =>{
        if(tile){
            if(tile.spawn === 3  || tile.spawn === 4){
                return (<div>
                    {props.life[tile.spawn-3]}
                    </div>);
            } else {
                return (<div onClick={clickSpawnTile(x,y)}>
                    {tile.cards[0]}
                </div>)
            }
        } else {
            return "";
        }
        
    }

    const clickSpawnTile = (x, y) => {
        if(props.selected){
            props.moves.placeInHere(x,y);
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