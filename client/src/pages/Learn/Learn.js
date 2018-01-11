
import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea } from "../../components/Form";
import { List, ListItem } from "../../components/List";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';



// const Learn = () =>
//   <Container fluid>
//     <Row>
//       <Col size="md-12">
//         <img src="./udemy.png" style={{width: 'auto'}} alt="learn mock"></img>
//       </Col>
//     </Row>
//   </Container>;

class Learn extends Component {

	state = {
		instructor: [],
		title: "",
		body: "",
		author: "",
		url: ""
	};

	componentDidMount() {
		this.loadInstructor();
	}

	loadInstructor = () => {
		API.getInstructor()
		.then(res =>this.setState({ instructor: res.data, title: "", body: "", author: "", url: ""}))
		.catch(err => console.log(err));
	};

	handleInputChange = event => {

    const { name, value } = event.target;

    this.setState({
      
      [name]: value
    });
  };

  handleFormSubmit = event => {

    event.preventDefault();

    if (this.state.title && this.state.author && this.state.body) {

      API.saveInstructor({
        title: this.state.title,
        author: this.state.author,
        body: this.state.body,
        url: this.state.url,
      }).then(res => this.loadInstructor()).catch(err => console.log(err));
    }
  };

  render () {
  	return (

  		<Container fluid>
        <Row>
          <Col size="md-12">
              <h1>Instructor Postings</h1>    
            <form>
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <TextArea
                value={this.state.body}
                onChange={this.handleInputChange}
                name="body"
                placeholder="Write your Post here"
              />
              <Input
                value={this.state.url}
                onChange={this.handleInputChange}
                name="url"
                placeholder="url"
              />
              <Button
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}>
                Submit Post
              </Button>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
              <h1>Instructor Posts</h1>
            {this.state.instructor.length ? (
              <List>
                {this.state.instructor.map(instructor => (
                  <ListItem key={instructor._id}>
                    <Link to={"/instructor/" + instructor._id} style={{textDecoration: 'none'}}>
                        <h5>{instructor.author}</h5> 
                        <h6>{instructor.title}</h6> 
                        <h7>{instructor.body}</h7>
                        <br></br>
                        <img src={instructor.url} style={{width: 200, height: 200}}></img>
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
        
      </Container>

  	)
  }
}

export default Learn;