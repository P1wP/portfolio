import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";


function PortfolioItem({projects}){

    return(
        <Col key={projects.id} className="project" md={4}>
            <Card>
                <Card.Img src={projects.img} />
                <Card.Body>
                    <Card.Title>{projects.title}</Card.Title>
                    <Card.Text>{projects.discription}</Card.Text>

                    <Card.Subtitle>TechStack</Card.Subtitle>
                    {projects.git && <Card.Img className="cardLogo" src={projects.gitLogo} />}
                   
                </Card.Body>
                <Button className="disabled">Live Demo</Button>
            </Card>

        </Col>
    );
}

export default PortfolioItem;