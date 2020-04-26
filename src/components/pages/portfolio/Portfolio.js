import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import {projects} from "../../../constants/Projects";
import PortfolioItem from "./PortfolioItem";
import Footer from "../../footer/Footer";

function Portfolio(){
    return(

        <div id="portfolio" className="page">

            <div className="headline">
                <h1>Portfolio</h1>
            </div>

            <Container>
                <div className="intro">
                    <h2>Take a look at some of my work </h2>
                </div>
                <Row>
                    {projects.map((project)=>{
                        return(
                            <PortfolioItem key={project.id} projects={project}/>
                        );
                    })}
                </Row>
            </Container>
            <Footer/>
        </div>
    );
}

export default Portfolio;
