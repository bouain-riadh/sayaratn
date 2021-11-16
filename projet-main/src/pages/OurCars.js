import React from "react";
import city from "../images/city+backgroundyellow.jpg";
import peugeot from "../images/peugeot-208.png";
import { Col, Container, Form, Row } from "react-bootstrap";
import googleplay from "../images/google-play.png";
import appstore from "../images/appstore.png";
import { Link } from "react-router-dom";
import { GiVibratingSmartphone } from "react-icons/gi";
import q5 from "../images/audi-q5.png"
import q7 from "../images/audi-q7.png"
import sportage from "../images/kia-sportage.png"
import ford from "../images/ford.png"
import passat from "../images/passat.png"
import jetta from "../images/passat-jetta.png"
import i10 from "../images/hyundai-i10.png"
import i20 from "../images/hyundai-i20.png"

function OurCars() {
  return (
    <div>
      <div style={{ backgroundImage: `url(${city})`, width: "100%" }}>
        <div
          style={{
            display: "flex",
            color: "rgb(253,197,0)",
            paddingLeft: "510px",
          }}
        >
          <h4>BOOK YOUR CAR NOW!</h4>
          <h1>73 330 330</h1>
        </div>
        <img
          style={{ width: "700px", marginLeft: "320px", paddingTop: "300px" }}
          src={peugeot}
        />
        <div style={{ display: "flex", marginTop: "70px" }}>
          <div>
            <p>Best in city</p>
            <h6>To rent Car Please use the quick reservation form</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              sed aliquet justo. Quisque ut mollis est.
            </p>
            <button
              style={{
                width: "100px",
                height: "45px",
                backgroundColor: "black",
                color: "rgb(253,197,0)",
                border: "none",
              }}
            >
              Button
            </button>
          </div>
          <div style={{ width: "400px" }}>
            <Form style={{ backgroundColor: "black", border: "none" }}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label></Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Name"
                  style={{
                    backgroundColor: "white",
                    border: "none",
                    marginBottom: "15px",
                  }}
                />
                <Form.Control
                  type="text"
                  placeholder="Enter Your Phone (+216)"
                  style={{ backgroundColor: "white", border: "none" }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Enter Your Message"
                  style={{ backgroundColor: "white", border: "none" }}
                />
              </Form.Group>
              <button
                style={{
                  backgroundColor: "white",
                  color: "black",
                  border: "none",
                }}
              >
                Button
              </button>
            </Form>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            backgroundColor: "grey",
          }}
        >
          <div style={{ width: "200px" }}>
            <GiVibratingSmartphone />
          </div>
          <p style={{ color: "white" }}>
            Book and manage trips via our mobile apps.
          </p>
          <Link to="/googleplay" style={{ marginRight: "20px" }}>
            <img src={googleplay} width="150px" />
          </Link>
          <Link to="/playstore">
            <img src={appstore} width="150px" />
          </Link>
        </div>
      </div>
      <div>
        <div>
        <Container>
  <Row>
    <Col><b>Audi Q5</b> <img src={q5} width="300px"/> </Col>
    <Col><b>Audi Q7</b> <img src={q7} width="320px"/></Col>
  </Row>
  <Row>
    <Col><b>Ford Ecosport</b> <img src={ford} width="360px"/></Col>
    <Col><b>Kia Sportage</b> <img src={sportage} width="340px"/> </Col>
  </Row>
  <Row>
    <Col><b>Passat</b> <img src={passat} width="400px"/></Col>
    <Col><b>Jetta</b> <img src={jetta} width="390px"/> </Col>
  </Row>  <Row>
    <Col><b>Hyundai i10</b> <img src={i10} width="380px"/></Col>
    <Col><b>Hyundai i20</b> <img src={i20} width="390px"/> </Col>
  </Row>
</Container>
        </div>
      </div>
    </div>
  );
}

export default OurCars;
