import { Types } from "models/enums";
import React from "react";
import NumberInput from "../general/number-input";
import Button from "../general/button";
import MenuHeader from "./menu-header";
import CardArt from "../card/card-art";
import { getCurentATK, getCurentHP, getCurrentRange, setStats } from "utils/card";
import "../../styles/menu-stats.css"
import NoInputLayer from "../general/no-input-layer";

const MenuStats = ({data, highlight, apply, clear}) => {

    const {place, card, index} = data;
    const cardName = card.type !== Types.TOKEN ? card.title : Types.TOKEN
    const [atk, setCardAtk] = React.useState(getCurentATK(card));
    const [hp, setCardHP] = React.useState(getCurentHP(card));
    const [range, setCardRange] = React.useState(getCurrentRange(card));
    const [isRangeEnable, setIsRangeEnable] = React.useState(false);

    const rangeCheck = (e) => {
        setIsRangeEnable(e.target.checked)
    }

    const applyStats = () => {
        let getRange = isRangeEnable ? range : getCurrentRange(card)
        let stats = {atk, hp, range:getRange};
        apply(place, stats, index);
        highlight(setStats(card, stats));
        clear();
    }

    return(
        <NoInputLayer>
            <div className="menu-stats-container">
                <MenuHeader header={`${cardName} Status`} clear={clear}/>
                <div className="menu-stats">
                    <div className="column">
                        <CardArt card={card}/>
                    </div>
                    <div className="column">
                        <h3>Atack:</h3>
                        <NumberInput value={atk} setValue={setCardAtk}/>
                        <h3>Life:</h3>
                        <NumberInput value={hp} setValue={setCardHP}/>
                        <div className="input-container">
                            <input type="checkbox" onChange={e => rangeCheck(e)}/><p>Set Card Range</p>
                        </div> 
                        { isRangeEnable &&
                            <React.Fragment>
                                <h3>Range:</h3>
                                <NumberInput value={range} setValue={setCardRange}/>
                            </React.Fragment>
                        }     
                    </div>
                </div>
                <Button click={()=> applyStats()}>Apply</Button>
            </div>
        </NoInputLayer>
    )
}

export default MenuStats;