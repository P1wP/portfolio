import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";


// PAGES
import Home from "../pages/home/Home";
import Portfolio from "../pages/portfolio/Portfolio";
import Cv from "../pages/cv/Cv.js";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact"
import  Face1  from '../../assets/img/head_2.svg';


function Layout(){
    return (
        <>
        <Router>
            <Navbar  expand="lg">
                <NavLink to="/" exact>
                    <Navbar.Brand><img className = "nav_img" src={Face1} alt="face"></img></Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink to="/" exact className="nav-link homeLink">
                            Home
                        </NavLink>
                        <NavLink to="/portfolio" exact className="nav-link">
                            Portfolio
                        </NavLink>
                        <NavLink to="/cv" className="nav-link">
                            Resume
                        </NavLink>
                        <NavLink  to="/about" className="nav-link">
                            About Me
                        </NavLink>
                        <NavLink to="/contact" className="nav-link">
                            Contact
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/portfolio" exact component={Portfolio} />
                    <Route path="/cv" exact component={Cv} />
                    <Route path="/about" exact component={About} />
                    <Route path="/contact" exact component={Contact} />
                    
                    
                </Switch>
            </div>
        </Router>
       
        </>
    );
};

// <Route path="/game/:id" component={GameDetails} />
export default Layout;