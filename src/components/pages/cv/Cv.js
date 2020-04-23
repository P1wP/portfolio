import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import WorkTimeline from "./WorkTimeline";
import EduTimeline from "./EduTimeline";
import Footer from "../../footer/Footer";


function Cv(){
    return(
        <div id="cv">
            <div className="headline">
                <h1>$Resume</h1>
                
            </div>
            <Container className="cv">
                <Row>
                    <Col sm={12} className="cvHeader text-center">
                        <h2 className="cvHeader__name">Joachim Skog Sætre</h2>
                        <p className="cvHeader__address">Symreveien 24, 1406 Ski, Norway</p>
                        <p className="cvHeader__contact">+47 47605059 | jokke90@gmail.com</p>
                        <p className="cvHeader__birth">Born: 20. February 1990</p>
                    </Col>

                    <Col sm={10} className="offset-sm-1">
                        <p className="cv__about">
                            I am located in Ski, Norway. 
                            I am a curiouse and teachable person, who strive to continuosly become better at what I do, with the goal of become the "go to guy" for any manner of questions or assignments.<br></br>
                            I look view myself as an outgoing introvert. I enjoy company and teamwork, but what i really love is peace and quiet and spending quality time in my own mind.<br></br> 
                        </p>
                        <p>/ /My friends and colleagues would describe me as:
                        </p>
                        <span>/ /My friends and colleagues would describe me as:</span>
                        <ul>
                    
                            <li>Faithful</li>
                            <li>Honest</li>
                            <li>Straightforward</li>
                            <li>Effective</li>
                            <li>Reliable</li>
                        </ul>
                        <p className="cv__about">
                            At the moment I am studying Front-End Development at Noroff vocational school.
                            I am confident to pass my final exam this spring. And hopefully <strong>You</strong> will be my first employer ralted to this field.
                        </p>
                    </Col>

                    <Col sm={10} className="cv__experience offset-sm-1">
                        <h3 className="cv__experience--headline">Work Experience</h3>
                        <WorkTimeline />
                    </Col>
                    <Col sm={10} className="cv__education offset-sm-1">
                        <h3 className="cv__education--headline">Education</h3>
                        <EduTimeline />
                    </Col>

                    <Col sm={10} className="cv__other offset-sm-1">
                        <h3 className="cv__other--headline">Other</h3>
                        <Row>
                            <Col sm={2}>
                                Languages:
                            </Col>
                            <Col sm={4}>
                                <p>Norwegian: First Language</p>
                                <p>English: Written and Verbal</p>
                            </Col>
                            
                        </Row>
                    </Col>

                    <Col sm={10} className="cv__references offset-sm-1">
                        <h3 className="cv__references--headline">References</h3>
                        <p>Contact me for references</p>
                    </Col>

                </Row>
                <div className="text-right">
                <button>PDF</button> Download PDF 
                </div>
            </Container>

        <Footer/>
        </div>
    );
}

export default Cv;