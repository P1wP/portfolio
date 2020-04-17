import React from "react";
//import Button from "react-bootstrap/Button";
//import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import Card from "react-bootstrap/Card";
import PortfolioBtn from "./portfolioBtn";
import CardFront from "./CardFront";
import CardBack from "./CardBack";



function PortfolioItem({projects}){

    return(
        <Col sm={12} md={6} lg={4} m={50}>
        <div className="card">
            <div className="card__inner">
                <CardFront projects={projects} />
                <CardBack projects={projects} />
                
            </div>
            
            <PortfolioBtn projects={projects} />
        </div>
        
        </Col>
    );
}
//https://themes.muffingroup.com/be/resume/
export default PortfolioItem;