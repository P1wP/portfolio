import React from "react";
import Heading from "../../typography/headings/Heading";
import SubHeading from "../../typography/headings/SubHeading";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
import Footer from "../../footer/Footer";

//import  Face1  from '../../../assets/img/head_2.svg';
import Particles from 'react-particles-js';
import { config } from "../../../constants/background";

function Home(){
    

    return(
        <div id="home" className="container-fluid">
            
            <Row>
               

                <Col className="home" xs={12} sm={8} md={9} lg={9}>
                    <div className="center-center">
                        <Heading heading="Joachim Skog Sætre" />
                        <Zoom left duration={1200}>
                            <SubHeading classProp="typewriter" subheading = "$ Front-end Developer" />
                        </Zoom>

                        <div className="home__btns">
                            <div className="home__btns--test">
                                <Link to={"/portfolio/"}>
                                   <Button className="home__btns--portfolio">Portfolio</Button>
                                </Link>
                            </div>
                            <div className="home__btns--test">
                                <Link to={"/contact/"}>
                                   <Button className="home__btns--contact">Contact Me</Button>
                                </Link>
                            </div>

                        </div>
                               
                        
                    </div>
                </Col>

                <Col className="headShot d-none d-sm-block"  sm={4} md={2} lg={2}>
                    
                </Col>
            </Row>

            <Particles params={config} />

        </div>
        
    );
}

export default Home;