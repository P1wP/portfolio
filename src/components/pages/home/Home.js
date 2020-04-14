import React from "react";
import Heading from "../../typography/headings/Heading";
import SubHeading from "../../typography/headings/SubHeading";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import  Face1  from '../../../assets/img/head_2.svg';
import Particles from 'react-particles-js';
import { config } from "../../../constants/background";

function Home(){
    

    return(
        <div id="home" className="page container-fluid">
            
            <Row>
               

                <Col xs={12} sm={8} md={8} lg={8}>
                    <Heading heading="Joachim Skog Sætre" />
                    <SubHeading classProp="typewriter" subheading = "$ Front-end Developer" />
                </Col>

                <Col className="headShot h-100vh h-xs-50vh d-none d-sm-block"  sm={4} md={4} lg={4}>
                    <img className = "headShot__right" src={Face1} alt="face"></img>
                </Col>
            </Row>
            <Particles params={config} />
            
        </div>
    );
}

export default Home;