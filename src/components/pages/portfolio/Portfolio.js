import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import {projects} from "../../../constants/Projects";
import PortfolioItem from "./PortfolioItem";
//import PortfolioItemTwo from "./PortfolioItemTwo";

function Portfolio(){
    return(
        <div id="portfolio">
        <h1>Check out my Projects</h1>
        <Container>
        

            <Row>
            {projects.map((project)=>{
                    return(
                        <PortfolioItem key={project.id} projects={project}/>
                    );
                })}
            </Row>

        </Container>
        </div>
    );
}

export default Portfolio;
