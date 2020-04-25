import React from "react";
import Button from "react-bootstrap/Button";
import {Education} from "../../../constants/education";

import Zoom from "react-reveal/Zoom";

function EduTimeline(){

    return(
        <div class="timeline">
                {Education.map((school)=>{
                    // USE ID TO SET LEFT AND RIGHT
                    // CHECK IF ID IS ODD/EVEN
                    if(school.id%2 === 0){
                        return(
    
                            <div key={school.id} class="timeline__container right">
                                <div className="timeline__content">

                                    <Zoom right>
                                        <h3>{school.year}</h3>
                                        <p className="timeline__school"><strong>{school.school}</strong></p>
                                        <p className="timeline__title">{school.title}</p>
                                        <p className="timeline__description">{school.description}</p>
                                        <a target="_blank" rel="noopener noreferrer" href={school.link}>
                                            <Button className="timeline__link">More Info</Button>
                                        </a>
                                    </Zoom>

                                </div>
                            </div>
                            
                            
                        )
                    }
                    return(
                        <div key={school.id} class="timeline__container left">
                            <div className="timeline__content">

                                <Zoom left>
                                    <h3>{school.year}</h3>
                                    <p className="timeline__school"><strong>{school.school}</strong></p>
                                    <p className="timeline__title">{school.title}</p>
                                    <p className="timeline__description">{school.description}</p>
                                    <a target="_blank" rel="noopener noreferrer" href={school.link}>
                                        <Button className="timeline__link">More Info</Button>
                                    </a>
                                </Zoom>

                            </div>
                        </div>
                    )
                   
                })}
                    
                    
        </div>
    );
}

export default EduTimeline;