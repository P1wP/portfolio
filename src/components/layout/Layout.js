import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";

import Container from "react-bootstrap/Container";

// PAGES
import Home from "../pages/home/Home";
import Portfolio from "../pages/portfolio/portfolio";
import Skills from "../pages/skills/skills";
import Cv from "../pages/cv/Cv"
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact"


function Layout(){
    return (
        
        <Router>
            <Navbar bg="dark" variant="dark" expand="lg">
                <NavLink to="/" exact>
                    <Navbar.Brand>JS-Frameworks CA</Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink to="/" exact className="nav-link">
                            Home
                        </NavLink>
                        <NavLink to="/portfolio" exact className="nav-link">
                            Portfolio
                        </NavLink>
                        <NavLink to="/skills" exact className="nav-link">
                            Skills
                        </NavLink>
                        <NavLink to="/cv" className="nav-link">
                            Cv
                        </NavLink>
                        <NavLink to="/about" className="nav-link">
                            About
                        </NavLink>
                        <NavLink to="/contact" className="nav-link">
                            Contact
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/portfolio" exact component={Portfolio} />
                    <Route path="/skills" exact component={Skills} />
                    <Route path="/cv" exact component={Cv} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" exact component={Contact} />
                    
                    
                </Switch>
            </Container>
        </Router>
        
    );
};

// <Route path="/game/:id" component={GameDetails} />
export default Layout;