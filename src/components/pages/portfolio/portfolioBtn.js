import React from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PortfolioBtn({projects}){
    // CHECK IF LIVE AND/OR GIT === TRUE
    const git = projects.git;
    const link = projects.live;

    const gitUrl = projects.gitLink;
    const linkUrl = projects.liveLink;
     
    if(git && link){
        return(
            <>
                <a target="_blank" rel="noopener noreferrer"  href={gitUrl}>
                    <Button className="btnGit">
                        <FontAwesomeIcon icon={['fab', 'github']} />
                    </Button>
                </a>
                <a target="_blank" rel="noopener noreferrer"  href={linkUrl}>
                    <Button className="btnDemo">
                        <FontAwesomeIcon icon={['fas', 'link']} />
                    </Button>
                </a>
            </>
        )
    }
    else if( git && !link){
        return(
            <>
                <a target="_blank" rel="noopener noreferrer"  href={gitUrl}>
                    <Button className="btnGit">
                        <FontAwesomeIcon icon={['fab', 'github']} />  
                    </Button>
                </a>
                
                    <Button disabled className="btnDemo">
                        <FontAwesomeIcon icon={['fas', 'link']} />
                    </Button>
                
            </>
        )
    }
    else if( !git && link){
        return(
            <>
                    <Button disabled className="btnGit"> 
                        <FontAwesomeIcon icon={['fab', 'github']} /> 
                    </Button>
                
                <a target="_blank" rel="noopener noreferrer"  href={linkUrl}>
                    <Button className="btnDemo">
                        <FontAwesomeIcon icon={['fas', 'link']} />
                    </Button>
                </a>
            </>
        )
    }
    // else
    return(
            <>
                    <Button disabled className="btnGit"> 
                        <FontAwesomeIcon icon={['fab', 'github']} /> 
                    </Button>
                
                
                    <Button disabled className="btnDemo">
                        <FontAwesomeIcon icon={['fas', 'link']} />
                    </Button>
                
            </>
    )
}

export default PortfolioBtn;