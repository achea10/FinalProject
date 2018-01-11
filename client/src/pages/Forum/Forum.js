//=========================================================================
// React
import React, { Component } from "react";
// API
import API from "../../utils/API";
// Components
import {Col, Row, Container} from "../../components/Grid";
import Button from "../../components/Button";
import {List} from "../../components/List";
import Jumbotron from "../../components/Jumbotron";
//========================================================================

class Topics extends Component {

  state = {

    topics: []
  };

  componentDidMount() {
    this.loadTopics();
  }

  loadTopics = () => {

    API.getTopics()
    .then(res =>this.setState({ topics: res.data}))
    .catch(err => console.log(err));
  };

  render() {

    return (

      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Forum Topics</h1>  
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-8">
            <List topics={this.state.topics} />
          </Col>
        </Row>
        <Button path="/add-topic">Add Topic</Button>  
      </Container>
    )
  }  
}

export default Topics;