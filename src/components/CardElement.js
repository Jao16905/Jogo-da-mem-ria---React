import React, { useContext } from "react";
import { FlipContext } from "../FlipContext";

export default function CardElement(props){

    const onHandleFlip = useContext(FlipContext);

    return(
        <div onClick={() =>{onHandleFlip(props.card)}} id={props.card.id} className={`card ${props.card.flipped ? "flip" : ""}`}>
            <div className="card_front">
                <img className="icon" src={`assets/images/${props.card.icon}.png`} alt={props.card.icon}></img>

            </div>
            <div className="card_back"> {"</>"} </div>
        </div>
    )

}