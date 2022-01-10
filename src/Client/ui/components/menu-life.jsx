import React from "react";
import PropTypes from 'prop-types';
import Button from "./button";
import { doWhenClickOutside } from "../../../utils/menu";
import "../styles/menu-life.css";

const MenuLife = ({life, apply, clear}) => {
    const clickRef = React.useRef(null);
    const [lifePoints, setLifePoints] = React.useState(life);

    React.useEffect(() => doWhenClickOutside(clickRef, clear)
    ,[clickRef, clear]);

    const applyLifePoints = () => {
        apply(lifePoints)
        clear()
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
                <Button click={()=> applyLifePoints()}>Apply</Button>
        </div>
)}

MenuLife.propTypes = {
    life: PropTypes.number, 
    apply: PropTypes.func, 
    clear: PropTypes.func
}

export default MenuLife;