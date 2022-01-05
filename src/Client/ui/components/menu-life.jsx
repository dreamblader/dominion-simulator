import React from "react";
import Button from "./button";
import { doWhenClickOutside } from "../../../utils/menu";
import "../styles/menu-life.css";

const MenuLife = (props) => {
    const clickRef = React.useRef(null);
    const [lifePoints, setLifePoints] = React.useState(props.life);

    React.useEffect(() => doWhenClickOutside(clickRef, props.clear)
    ,[clickRef, props]);

    const apply = () => {
        props.apply(lifePoints)
        props.clear()
    }

    return(
        <div className="menu-life-container"  
        ref={clickRef}>
            <p>Set Your Life Points:</p>
            <div className="life-container">
                <Button 
                extraClass=" success"
                click={()=> setLifePoints(parseInt(lifePoints)+1)}>+</Button>
                <input 
                type="number" 
                value={lifePoints} 
                onChange={e => setLifePoints(e.target.value)}/>
                <Button 
                extraClass=" quit"
                click={()=> setLifePoints(parseInt(lifePoints)-1)}>-</Button>
            </div>
                <Button click={()=> apply()}>Apply</Button>
        </div>
)}

export default MenuLife;