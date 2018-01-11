//======================================================================================
// React
import React, { Component } from "react";
// API
import API from "../../utils/API";
// Components
import Jumbotron from "../../components/Jumbotron";
import FormBtn from "../../components/FormBtn";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea} from "../../components/Form";
//======================================================================================

class AddTopic extends Component {

  state = {

    title: "",
    author: "",
    body: ""
  };

  handleInputChange = event => {

    const {name, value} = event.target;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {

    event.preventDefault();

    if(this.state.title && this.state.author) { 

      API.saveTopic({
        title: this.state.title, 
        author: this.state.author, 
        body: this.state.body
      }).catch(err => console.log(err));
    }
    window.location.reload(true);
  }

  render() {

    return (

      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Submit Your Topic Bellow</h1>
            </Jumbotron>
          </Col>  
        </Row>
        <Row>
          <Col size="md-4">    
            <form>
              <Input 
                name="title" 
                onChange={this.handleInputChange} 
                value={this.state.title} 
                placeholder="Title (required)" 
              />
              <Input 
                name="author"
                onChange={this.handleInputChange} 
                value={this.state.author} 
                placeholder="Author (required)" 
              />
              <TextArea 
                name="body" 
                onChange={this.handleInputChange}
                value={this.state.body} 
                placeholder="Topic (required)" 
              />
              <FormBtn 
                onClick={this.handleFormSubmit}
                disabled={!(this.state.author && this.state.body && this.state.title)}
                >Submit</FormBtn>
            </form>
          </Col>
        </Row>
      </Container>  
    );
  }
}

export default AddTopic;