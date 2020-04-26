import React from "react";
import Col from "react-bootstrap/Col";
import Fade from "react-reveal/Fade";
import PortfolioBtn from "./portfolioBtn";
import CardFront from "./CardFront";
import CardBack from "./CardBack";



function PortfolioItem({projects}){

    return(
        
        <Col sm={12} md={6} lg={4} m={50}>
        <Fade left duration={1200} >
        <div className="card">
            <div className="card__inner">
                <CardFront projects={projects} />
                <CardBack projects={projects} />
                
            </div>
            
            <PortfolioBtn projects={projects} />
        </div>
        </Fade>
        </Col>
        
    );
}

export default PortfolioItem;

