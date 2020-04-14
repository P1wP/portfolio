import React from "react";
import Button from "react-bootstrap/Button";

function PortfolioBtn({projects}){
    // CHECK IF LIVE AND/OR GIT === TRUE
    const git = projects.git;
    const link = projects.live;
     
    if(git && link){
        return(
            <>
            <Button>GitHub</Button>
            <Button>Live Demo</Button>
            </>
        )
    }
    else if( git && !link){
        return(
            <>
            <Button>GitHub</Button>
            <Button disabled>Live Demo</Button>
            </>
        )
    }
    // else
    return(
            <>
            <Button disabled>GitHub</Button>
            <Button>Live Demo</Button>
            </>
    )
}

export default PortfolioBtn;