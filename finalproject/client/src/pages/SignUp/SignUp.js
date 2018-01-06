import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";

const SignUp = () => (
    <Container>
      <form>
        First Name:<input name="firstName" /><br/>
        Last Name:<input name="lastName" /><br/>
        

      </form>
    </Container>
  );
  

export default SignUp;