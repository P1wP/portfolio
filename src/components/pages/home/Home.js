import React from "react";
import Heading from "../../typography/headings/Heading";
import SubHeading from "../../typography/headings/SubHeading";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

//import  Face1  from '../../../assets/img/head_2.svg';
import Particles from 'react-particles-js';
import { config } from "../../../constants/background";

function Home(){
    

    return(
        <div id="home" className="page container-fluid">
            
            <Row>
               

                <Col className="homeText" xs={12} sm={8} md={9} lg={9}>
                    <div className="center-center">
                        <Heading heading="Joachim Skog Sætre" />
                        <SubHeading classProp="typewriter" subheading = "$ Front-end Developer" />
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