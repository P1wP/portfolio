import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Skills from "../skills/skills";

import Fade from "react-reveal/Fade";


function About(){
    
    // GET YEAR
    const curDate = new Date();
    const curYear = curDate.getFullYear();
    console.log(curYear);
   
    return(
        <div id="about" className="page">
            <div className="headline">
                <h1>$About Me</h1>   
            </div>
            <Container>
                <Row>
                    <Col sm={12} className="about__intro">
                        <p>
                        Hello!
                        As you already know, my name is Joachim. 
                        </p>
                        <p>I'm a Front-end developer, who's looking for work. This spring I will complete </p>
                    </Col>
                    
                    <Col sm={12} className="about__skills">
                        <Skills/>
                    </Col>

                </Row>
            </Container>
           
        


        </div>
    );

    
}

export default About;