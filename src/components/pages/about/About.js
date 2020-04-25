import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Footer from "../../footer/Footer";


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
            <div className="about container-fluid">
                <Row>
                    <Col sm={12} md={4} lg={2} className="about__basic offset-md-1 offset-lg-2">
                        <h2>Joachim S. Sætre</h2>
                        <ul className="about__basic--list">
                            <li><strong>Age: </strong> 30 </li>
                            <li><strong>Location: </strong> Ski, Norway </li>
                            <li><strong>Job: </strong> Looking for work </li>
                        </ul>
                        <div className="about__basic--links">
                        <a target="_blank" rel="noopener noreferrer"  href="https://www.linkedin.com/in/joachim-s%C3%A6tre-a58876152/"><FontAwesomeIcon className="about__basic--icon" icon={['fab', 'linkedin']} /></a>
                        <a target="_blank" rel="noopener noreferrer"  href="https://github.com/P1wP"><FontAwesomeIcon className="about__basic--icon" icon={['fab', 'github']} /></a>
                        </div>

                    </Col>
                    <Col sm={12} md={6} className="about__intro">
                        <h3 className="about__intro--heading">  Hello!</h3>
                        <p>
                            My name is Joachim, I'm a 30-year-old Front End Developer based in Ski, Norway. <br/>
                            I love coding, open-source, and web-platform. <br/>
                            At the moment I'm close to completing the Front End Development program at Noroff, and I'm looking for a job in the field.<br/>

                            In my spare time, I spend a lot of time with my family, And when I get some extra free time I enjoy going on hikes and camp outdoors.
                        </p>
                    </Col>
                </Row> 
            </div>
           <Container className="about__skills">
                <div className="headline">
                    <h3>Skills</h3>
                </div>
                <p>These are skills I feel confident with.<br/>
                <i><strong>Note: </strong>There is allways room for improvement</i></p>

                <ul className="about__skills--list">
                    <li>HTML</li>
                    <li>CSS / SASS</li>
                    <li>JavaScript</li>
                    <li>Adobe Illustrator</li>
                    <li>React.js</li>
                </ul>
           </Container>
                <div className="about__questions">
                <p>Have any Questions?</p>
                <Link to={"/contact/"}>
                     <Button className="home__btns--contact">Contact Me!</Button>
                </Link>
                </div>    

                <Footer/>

        </div>
    );

    
}

export default About;