import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from 'react-router-dom'
import padlock from "../images/padlock.png";
import logo from "../images/sayaratn final yellow.png"


function Navb(props) {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="dark">
        <img src={logo} width="150px" />
        <Container className="navbar">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <div>
                <Link to="/home" style={{ color: "black", paddingLeft: "270px" }}><b>HOME</b></Link>
                <Link to="/OurCars" style={{ color: "black", paddingLeft: "10px" }}><b>OUR CARS</b></Link>
                <Link to="/aboutus" style={{ color: "black", paddingLeft: "10px" }}><b>ABOUT US</b></Link>
                <Link to="/contactus" style={{ color: "black", paddingLeft: "10px" }}><b>CONTACT US</b></Link>
              </div>
            </Nav>
            <Nav>
              <img
                src={padlock}
                style={{
                  width: 20,
                  height: 20,
                  marginTop: 10,
                  marginLeft: 100,
                  color: "7B959E",
                }}
              />
              {props.isConnected
                ? <button onClick={props.logout} style={{ color: "rgb(253,197,0)" }}><b>LOGOUT</b></button>
                : <Link to="/login" style={{ color: "rgb(253,197,0)" }}><b>SIGN UP / REGISTER</b></Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navb;
