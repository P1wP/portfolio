import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import {projects} from "../../../constants/Projects";
import PortfolioItem from "./PortfolioItem";
//import PortfolioItemTwo from "./PortfolioItemTwo";

function Portfolio(){
    return(

        <div id="portfolio">

            <div className="headline">
                <h1>$Portfolio</h1>
            </div>

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
