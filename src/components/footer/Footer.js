import React from "react";
import FooterBS from "react-bootstrap/ModalFooter";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Footer(){
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return(
        <FooterBS className="footer">
            <Row>
                <Col sm={12} md="4">
                    test
                </Col>
                <Col sm={12} md="4">
                    test
                </Col>
                <Col sm={12} md="4">
                    test
                </Col>
            </Row>
            <p className="footer__madeBy">Made by Joachim S. Sætre | {year}</p>
        </FooterBS>
    )
}

export default Footer;