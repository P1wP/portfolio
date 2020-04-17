import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import PortfolioBtn from "./portfolioBtn";

// IMAGES
//import GitLogo from "../../../assets/logo/git.png";
import HtmlLogo from "../../../assets/logo/html.png";
import SassLogo from "../../../assets/logo/sass.png";
import CssLogo from "../../../assets/logo/css.png";
import JsLogo from "../../../assets/logo/js.png";
import ReactLogo from "../../../assets/logo/react.png";
import GruntLogo from "../../../assets/logo/grunt.png";
import PyLogo from "../../../assets/logo/py.png";


function PortfolioItem({projects}){

    return(
        <Col key={projects.id} className="project" md={4}>
            <Card>
                <Card.Img src={projects.img} />
                
                <Card.Body>
                    <Card.Title>{projects.title}</Card.Title>
                    <Card.Subtitle>Description</Card.Subtitle>
                    <Card.Text>{projects.discription}</Card.Text>

                    <Card.Subtitle>TechStack</Card.Subtitle>
                    <Row>
                    {projects.html && <Col xs={3}><Card.Img className="cardLogo" src={HtmlLogo} /></Col>}
                    {projects.css && <Col xs={3}><Card.Img className="cardLogo" src={CssLogo} /></Col>}
                    {projects.js && <Col xs={3}><Card.Img className="cardLogo" src={JsLogo} /></Col>}
                    {projects.sass && <Col xs={3}><Card.Img className="cardLogo" src={SassLogo} /></Col>}
                    {projects.react && <Col xs={3}><Card.Img className="cardLogo" src={ReactLogo} /></Col>}
                    {projects.grunt && <Col xs={3}><Card.Img className="cardLogo" src={GruntLogo} /></Col>}
                    {projects.py && <Col  xs={6} md={8}><Card.Img className="cardLogo" src={PyLogo} /></Col>}
                    </Row>
                    
                </Card.Body>
                <PortfolioBtn projects={projects} />
            </Card>

        </Col>
    );
}

export default PortfolioItem;