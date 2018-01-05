import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";

const SignUp = () =>
  <Container fluid>
    <Row>
      <Col size="md-12">
        <Jumbotron>
          <h1>SignUp here</h1>
          <h1>
            <span role="img" aria-label="Face With Rolling Eyes Emoji">
              
            </span>
          </h1>
        </Jumbotron>
      </Col>
    </Row>
  </Container>;

export default SignUp;