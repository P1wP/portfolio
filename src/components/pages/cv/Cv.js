import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
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

                    <Col sm={10} className="offset-sm- cv__about">
                        <p>
                        I am located in Ski, Norway. 
                        I am a curious person, who strives to continually become better at what I do, to become the "go-to guy" 
                        for any manner of questions or assignments.<br></br>
                        I view myself as an outgoing introvert. I enjoy company and teamwork, but what I love is sitting alone in a peaceful environment.<br></br> 
                        </p>
                        <p>My friends and colleagues would describe me as Faithful, honest, effective, straightforward, and Reliable.
                        </p>
            
                        <p>
                        At the moment I am studying Front-End Development at Noroff vocational school. 
                        I am confident to pass my final exam this spring. And hopefully, <strong>You</strong> will be my first employer related to this field.
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
                                <p>Languages:</p>
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
                <Button>PDF</Button> Download PDF 
                </div>
            </Container>

        <Footer/>
        </div>
    );
}

export default Cv;