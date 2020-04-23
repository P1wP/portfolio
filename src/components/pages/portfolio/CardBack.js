import React from "react";
import Particles from 'react-particles-js';
import { config } from "../../../constants/background";

function CardBack({projects}){
    return(
        <div className = "card__flip__back">
            <h2 className="card__flip__back--title">{projects.title}</h2>
            <Particles params={config} />
            <div className="card__flip__back--description" > <p>{projects.discription}</p> </div>
        </div>
    );
}

export default CardBack;