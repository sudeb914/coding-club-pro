import React from "react";
import { Badge, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "./../../assets/images/download.png";
import headerBG from "./../../assets/images/header-bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
      <Navbar style={{ background: `url(${headerBG})` }} expand="lg">
        <Container>
          <Navbar.Brand className="text-white" href="#home">
            <img width="70px" src={logo} alt="" />
            Coding Club Institute
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="text-white" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="text-white" href="#link">
                About
              </Nav.Link>
              <Nav.Link className="text-white" href="#link">
                Sign Up
              </Nav.Link>
              <Nav.Link className="text-white" href="#link">
                Log in
              </Nav.Link>
              <Nav.Link className="text-white" href="#link">
                <FontAwesomeIcon style={{fontSize:'20px'}} icon={faShoppingCart} />
                {" "}
                <Badge bg="warning">0</Badge>
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
