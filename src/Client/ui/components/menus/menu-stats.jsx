import { Types } from "models/enums";
import React from "react";
import NumberInput from "../general/number-input";
import Button from "../general/button";
import MenuHeader from "./menu-header";
import CardArt from "../card/card-art";
import { getCurentATK, getCurentHP, getCurrentRange } from "utils/card";

const MenuStats = ({card, apply, clear}) => {

    const cardName = card.type !== Types.TOKEN ? card.title : Types.TOKEN
    const [atk, setCardAtk] = React.useState(getCurentATK(card));
    const [hp, setCardHP] = React.useState(getCurentHP(card));
    const [range, setCardRange] = React.useState(getCurrentRange(card));
    const [isRangeEnable, setIsRangeEnable] = React.useState(false);

    const rangeCheck = (e) => {
        setIsRangeEnable(e.target.checked)
    }

    const applyStats = () => {
        //apply stats
    }

    return(
    <div>
        <MenuHeader header={`${cardName} Status`} clear={clear}/>
        <div className="column">
            <CardArt card={card}/>
        </div>
        <div className="column">
            <h3>Atack:</h3>
            <NumberInput value={atk} setValue={setCardAtk}/>
            <h3>Life:</h3>
            <NumberInput value={hp} setValue={setCardHP}/>
            <input type="checkbox" onChange={e => rangeCheck(e)}/><p>Set Card Range</p>
            { isRangeEnable &&
                <React.Fragment>
                    <h3>Range:</h3>
                    <NumberInput value={range} setValue={setCardRange}/>
                </React.Fragment>
            }     
        </div>
        <Button click={()=> applyStats()}>Apply</Button>
    </div>
)}

export default MenuStats;