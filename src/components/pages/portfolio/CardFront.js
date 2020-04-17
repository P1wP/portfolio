import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

//import GitLogo from "../../../assets/logo/git.png";
import HtmlLogo from "../../../assets/logo/html.png";
import SassLogo from "../../../assets/logo/sass.png";
import CssLogo from "../../../assets/logo/css.png";
import JsLogo from "../../../assets/logo/js.png";
import ReactLogo from "../../../assets/logo/react.png";
import GruntLogo from "../../../assets/logo/grunt.png";
import PyLogo from "../../../assets/logo/py.png";

function CardFront({projects}){
    const divStyle = {
        backgroundImage: 'url(' + projects.img + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left',
        backgroundSize: 'cover',
      };

    return(
        <div className = "card__flip__front">
            {/* PROJECT TITLE */}
            <h2 className="card__flip__front--title">{projects.title}</h2>

            {/* PROJECT IMAGE */}
            <div className="card__flip__front--img" style={divStyle} >

                {/* PROJECT TECHSTACK */}
            <div className="container-fluid">
                <Row className="card__flip__front--stack">
                    {projects.html && <Col xs={3}><Card.Img className="cardLogo" src={HtmlLogo} /></Col>}
                    {projects.css && <Col xs={3}><Card.Img className="cardLogo" src={CssLogo} /></Col>}
                    {projects.js && <Col xs={3}><Card.Img className="cardLogo" src={JsLogo} /></Col>}
                    {projects.sass && <Col xs={3}><Card.Img className="cardLogo" src={SassLogo} /></Col>}
                    {projects.react && <Col xs={3}><Card.Img className="cardLogo" src={ReactLogo} /></Col>}
                    {projects.grunt && <Col xs={3}><Card.Img className="cardLogo" src={GruntLogo} /></Col>}
                    {projects.py && <Col  xs={6} md={8}><Card.Img className="cardLogo" src={PyLogo} /></Col>}
                </Row>
            </div>
            </div>
        </div>
    );
}

export default CardFront;