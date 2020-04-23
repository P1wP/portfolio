import React from "react";
import {WorkXp} from "../../../constants/workXp";

import Zoom from "react-reveal/Zoom";



function WorkTimeline(){

    return(
        <div class="timeline">
                {WorkXp.map((work)=>{
                    // USE ID TO SET LEFT AND RIGHT
                    // CHECK IF ID IS ODD/EVEN
                    if(work.id%2 === 0){
                        return(
    
                            <div key={work.id} class="timeline__container right">
                                <div className="timeline__content">

                                    <Zoom right>
                                        <h2>{work.year}</h2>
                                        <p className="timeline__company"><strong>{work.company}</strong></p>
                                        <p className="timeline__title">{work.title}</p>
                                        <p className="timeline__description">{work.description}</p>
                                    </Zoom>

                                </div>
                            </div>
                            
                            
                        )
                    }
                    return(
                        <div key={work.id} class="timeline__container left">
                            <div className="timeline__content">

                                <Zoom left>
                                    <h2>{work.year}</h2>
                                    <p className="timeline__company"><strong>{work.company}</strong></p>
                                    <p className="timeline__title">{work.title}</p>
                                    <p className="timeline__description">{work.description}</p>
                                </Zoom>

                            </div>
                        </div>
                    )
                   
                })}
                    
                    
        </div>
    );
}


export default WorkTimeline;