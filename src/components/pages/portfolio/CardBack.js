import React from "react";

function CardBack({projects}){
    return(
        <div className = "card__flip__back">
            <h2 className="card__flip__back--title">{projects.title}</h2>
            <div className="card__flip__back--description" > {projects.discription} </div>
        </div>
    );
}

export default CardBack;