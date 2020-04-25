import React from "react";
import { Link } from "react-router-dom";
import FooterBS from "react-bootstrap/ModalFooter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Footer(){
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return(
        <FooterBS className="footer container-fluid">
            <Row>
                <Col sm={6} md={4}>
                    <div className="footer__left">
                        <ul>
                            <li>
                                <Link to={"/"}>
                                   Home
                                </Link>
                            </li>
                            <li>
                                <Link to={"/portfolio/"}>
                                   Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link to={"/contact/"}>
                                   Conatct
                                </Link>
                            </li>
                           
                        </ul>
                    </div>
                </Col>
                
                <Col sm={6} md={4}>
                    <div className="footer__right">
                    <a target="_blank" rel="noopener noreferrer"  href="https://www.linkedin.com/in/joachim-s%C3%A6tre-a58876152/"><FontAwesomeIcon className="footer__icon" icon={['fab', 'linkedin']} /></a>
                        <a target="_blank" rel="noopener noreferrer"  href="https://github.com/P1wP"><FontAwesomeIcon className="footer__icon" icon={['fab', 'github']} /></a>
                    </div>
                </Col>
            </Row>
            <p className="footer__madeBy">Made by Joachim S. Sætre &copy; {year}</p>
        </FooterBS>
    )
}

export default Footer;